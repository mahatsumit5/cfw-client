import React from "react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { UserLayout } from "../../components/layout/UserLayout";
import { CustomModal } from "../../components/modal/CustomModal";
import { Container } from "@mui/material";

const stripePromise = loadStripe(
  `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
);
export const StripeCheckout = () => {
  const clientSecret = localStorage.getItem("clientSecret");
  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };
  return (
    <>
      <UserLayout>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
          )}
        </Container>
      </UserLayout>
    </>
  );
};
