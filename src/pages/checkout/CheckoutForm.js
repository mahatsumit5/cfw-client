import { Box, Button, TextField } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { postPaymentIntent } from "../../axios/stripeAxios";
import { useSelector } from "react-redux";
const CheckoutForm = () => {
  const { user } = useSelector((store) => store.userInfo);
  const stripe = useStripe();
  const elements = useElements();

  const [form, setForm] = useState({});
  const handleOnSubmit = async (e) => {
    const obj = { ...form, customer: user._id };
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const { clientSecret } = await postPaymentIntent(obj);
    if (clientSecret) {
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: form,
        },
      });
      console.log(paymentIntent);
    }
  };
  return (
    <Box sx={{ margin: "auto", p: 5 }}>
      <form style={{ width: "400px", margin: "auto" }}>
        <TextField
          label="name"
          name="name"
          type="text"
          onChange={(e) => {
            const { name, value } = e.target;
            setForm({ ...form, [name]: value });
          }}
        />
        <TextField
          label="Email"
          name="email"
          onChange={(e) => {
            const { name, value } = e.target;
            setForm({ ...form, [name]: value });
          }}
        />
        <CardElement />
        {/* <AfterpayClearpayMessageElement /> */}
        {/* <CardCvcElement />
        <CardExpiryElement />
        <CardNumberElement /> */}
        {/* <ExpressCheckoutElement /> */}
        <Button variant="contained" color="success" onClick={handleOnSubmit}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CheckoutForm;
