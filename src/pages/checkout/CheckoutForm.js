import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import {
  AddressElement,
  AuBankAccountElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../axios/orderAxios";
import { postOrderAction } from "../../action/orderAction";
import { useNavigate } from "react-router-dom";
import { BackdropLoader } from "../../components/backdropLoader/BackdropLoader";
import { setBackdrop } from "../../redux/backdropLoader";
import { CustomModal } from "../../components/modal/CustomModal";
import { setModal } from "../../redux/modalSlice";
const webDomain = process.env.REACT_APP_WEB_DOMAIN;

const CheckoutForm = ({ clientSecret }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [paymentIntent, setPaymentIntent] = useState({});
  const [client_secret] = useState(
    new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    )
  );
  const { user, payment, orderItems } = useSelector((store) => store.orderInfo);
  const { modalName } = useSelector((store) => store.modalInfo);
  async function retrivePaymentIntent() {
    const { paymentIntent, error } = await stripe.retrievePaymentIntent(
      clientSecret
    );
    if (paymentIntent?.status === "succeeded") {
      const loading = dispatch(
        postOrderAction({
          user,
          payment: { ...payment, isPaid: true },
          orderItems,
        })
      );
      dispatch(setBackdrop(true));
      const orderNumber = await loading;
      if (orderNumber) {
        navigate(`/cart/order/${orderNumber}`);
      }
      dispatch(setBackdrop(false));
    }
    if (error) {
      dispatch(setModal({ isModalOpen: true, modalName: "errorMessage" }));
      setError(error);
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    if (payment.method === "afterpay_clearpay") {
      const addressElement = elements.getElement("address");
      const { value } = await addressElement.getValue();

      const { error, paymentIntent } =
        await stripe.confirmAfterpayClearpayPayment(`${clientSecret}`, {
          payment_method: {
            billing_details: { ...value, email: user.email },
          },
          shipping: value,

          return_url: webDomain + "cart/checkout/stripe",
        });
      if (error) {
        dispatch(setModal({ isModalOpen: true, modalName: "errorMessage" }));
        setError(error.message);
      }
    }
    if (payment.method === "zip") {
      const { paymentIntent, error } = await stripe.confirmZipPayment(
        `${clientSecret}`
      );
      if (error) {
        console.log(error);
        dispatch(setModal({ isModalOpen: true, modalName: "errorMessage" }));
        setError(error);
      }
    }
    if (payment.method === "card") {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: webDomain + "cart/checkout/stripe",
        },
      });
      if (error) {
        dispatch(setModal({ isModalOpen: true, modalName: "errorMessage" }));
        setError(error?.message);
      }
    }
    if (payment.method === "au_becs_debit") {
      const { paymentIntent, error } = await stripe.confirmAuBecsDebitPayment(
        clientSecret,
        {
          payment_method: {
            au_becs_debit: {
              bsb_number: "000000",
              account_number: "000123456",
            },
            billing_details: {
              name: "John Smith",
              email: "john.smith@example.com",
            },
          },
        }
      );

      if (paymentIntent) {
        setPaymentIntent(paymentIntent);
        const loading = dispatch(
          postOrderAction({
            user,
            payment: { ...payment, isPaid: true },
            orderItems,
          })
        );
        dispatch(setBackdrop(true));
        const orderNumber = await loading;
        if (orderNumber) {
          navigate(`/cart/order/${orderNumber}`);
        }
        dispatch(setBackdrop(false));
      }
      if (error) {
        console.log(error);
        dispatch(setModal({ isModalOpen: true, modalName: "errorMessage" }));
        setError(error);
      }
    }
  };
  useEffect(() => {
    if (!paymentIntent.id) {
      return;
    }

    retrivePaymentIntent();
  }, [paymentIntent]);
  useEffect(() => {
    if (!client_secret || !stripe) {
      return;
    }
    try {
      retrivePaymentIntent();
    } catch (error) {
      setError({ message: "An unexpected error occurred. Please try again." });
    }
  }, [client_secret, stripe]);

  return (
    <Box
      sx={{
        p: 2,
        width: { xs: 320, sm: 450, md: 400 },
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {modalName === "errorMessage" && (
        <CustomModal title="Error">
          <Typography variant="body" color={"error"}>
            {error?.message}
          </Typography>
        </CustomModal>
      )}
      <BackdropLoader />
      <form
        style={{
          width: { xs: 300, sm: 430, md: 380 },
          height: "550px",
        }}
      >
        <h1>Billing Details</h1>
        <AddressElement options={{ mode: "billing" }} />
        <PaymentElement options={{ layout: "tabs" }} />
        <Button
          variant="contained"
          color="success"
          onClick={handleOnSubmit}
          fullWidth
          sx={{ mt: 2 }}
          disabled={!orderItems.length}
        >
          Pay Now
        </Button>
      </form>
    </Box>
  );
};

export default CheckoutForm;
