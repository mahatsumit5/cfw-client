import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import {
  AddressElement,
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
  const [open, setopen] = useState(false);
  const [client_secret, setClientSecret] = useState(
    new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    )
  );
  const { user, payment, orderItems } = useSelector((store) => store.orderInfo);
  const { modalName } = useSelector((store) => store.modalInfo);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    if (payment.method === "afterpay_clearpay") {
      const { error, paymentIntent } =
        await stripe.confirmAfterpayClearpayPayment(`${clientSecret}`, {
          payment_method: {
            billing_details: {
              name: user.fName,
              email: user.email,
              address: AddressElement,
            },
          },
          shipping: {
            name: user.fName,
            address: {
              line1: "123 Main Street",
              city: "San Francisco",
              state: "CA",
              country: "US",
              postal_code: "94321",
            },
          },

          return_url: webDomain + "cart/checkout/stripe",
        });
      if (error) {
        dispatch(setModal({ isModalOpen: true, modalName: "errorMessage" }));
        setError(error.message);
      }
    }
    if (payment.method === "zip") {
      await stripe.confirm(`${clientSecret}`);
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
  };

  // calling retrive payment and postin order based on status

  useEffect(() => {
    if (!client_secret && !stripe) {
      return;
    }
    try {
      console.log(client_secret, "inside if");
      async function retrivePaymentIntent() {
        const { paymentIntent, error } = await stripe.retrievePaymentIntent(
          clientSecret
        );
        if (paymentIntent?.status === "succeeded") {
          const loading = dispatch(
            postOrderAction({ user, payment, orderItems })
          );
          dispatch(setBackdrop(true));
          const orderNumber = await loading;
          if (orderNumber) {
            navigate(`/cart/order/${orderNumber}`);
          }
          dispatch(setBackdrop(false));
        }
        if (error) {
          setError("An error occured. Please go back.");
        }
      }
      retrivePaymentIntent();
    } catch (error) {
      // Handle unexpected errors here, e.g., log them
      console.error("Unexpected error:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  }, [client_secret, stripe]);

  return (
    <Box sx={{ width: 300 }}>
      {modalName === "errorMessage" && (
        <CustomModal>
          <Typography variant="body" color={"error"}>
            {error}
          </Typography>
        </CustomModal>
      )}
      <BackdropLoader />
      <form
        style={{
          width: "300px",
          height: "550px",
          overflowY: "auto",
          overflowX: "hidden",
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
        <Typography variant="body" color={"error"}>
          {error}
        </Typography>
      </form>
    </Box>
  );
};

export default CheckoutForm;
