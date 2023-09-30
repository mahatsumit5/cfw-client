import React from "react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@mui/material";
import CheckoutForm from "./CheckoutForm";

export const StripeCheckout = () => {
  const stripePromise = loadStripe(
    `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
  );
  console.log(stripePromise);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
