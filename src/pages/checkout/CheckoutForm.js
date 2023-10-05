import { Box, Button, TextField, Typography } from "@mui/material";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/modalSlice";
import { postUserAction } from "../../action/userAction";
import { postOrderAction } from "../../action/orderAction";
const CheckoutForm = ({ clientSecret }) => {
  const { user, payment, orderItems } = useSelector((store) => store.orderInfo);
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

          return_url: "http://localhost:3000/checkout",
        });
    }
    if (payment.method === "zip") {
      await stripe.confirm(`${clientSecret}`).then((res) => {
        // post order
      });
    }
    if (payment.method === "card") {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3000/checkout",
        },
      });
    }
  };
  return (
    <Box sx={{ width: 300 }}>
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
