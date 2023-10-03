import { Box, Button, TextField, Typography } from "@mui/material";
import {
  AddressElement,
  CardElement,
  ExpressCheckoutElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { postPaymentIntent } from "../../axios/stripeAxios";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/modalSlice";
const CheckoutForm = ({ clientSecret }) => {
  const { payment } = useSelector((store) => store.orderInfo);

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    if (payment.method === "afterpay_clearpay") {
      console.log("iniside after pay");
      const result = await stripe.confirmAfterpayClearpayPayment(
        `${clientSecret}`
      );
    }
    if (payment.method === "zip") {
      console.log("iniside zip");
      const result = await stripe.confirm(`${clientSecret}`);
      console.log(result);
    }
    if (payment.method === "card") {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3000/checkout",
        },
      });
      if (result.error) {
        setError(error);
      }
      if (result?.paymentIntent.status === "succeeded") {
        dispatch(setModal({ isModalOpen: false, modalName: "stripe" }));
      }
    }
  };
  return (
    <Box sx={{ width: 320 }}>
      <form
        style={{
          width: "320px",
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
