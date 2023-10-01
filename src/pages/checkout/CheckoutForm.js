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
const CheckoutForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/checkout",
      },
    });
    if (paymentIntent.status === "succeeded") {
      dispatch(setModal({ isModalOpen: false, modalName: "stripe" }));
    }
  };
  return (
    <Box sx={{ margin: "auto" }}>
      <form style={{ width: "400px", margin: "auto" }}>
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
          Error
        </Typography>
      </form>
    </Box>
  );
};

export default CheckoutForm;
