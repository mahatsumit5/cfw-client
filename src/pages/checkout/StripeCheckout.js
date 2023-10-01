import React from "react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@mui/material";
import CheckoutForm from "./CheckoutForm";

export const StripeCheckout = () => {
  const stripePromise = loadStripe(
    `pk_test_51NsR1aGbch8SC1C7zK7H1XG82rBH02wjhXVRsdhOkCsCD0vXSsZD2kzyqncayXn1G4Z7u0trH4Eftu4L3YwnQrmE00GkHj5VOX`
  );
  console.log(stripePromise);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
