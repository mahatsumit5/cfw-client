import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { CustomStepper } from "../../components/stepper/stepper";
import { OrderDetailsAccordian } from "../../components/checkout/OrderDetailsAccordian";
import { UserDetailsAccordian } from "../../components/checkout/UserDetailsAccordian";
import { PaymentAccordian } from "../../components/checkout/PaymentAccordian";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { postOrderAction } from "../../action/orderAction";
import { useNavigate } from "react-router-dom";
import { StripeCheckout } from "./StripeCheckout";
import { setModal } from "../../redux/modalSlice";
import { postPaymentIntent } from "../../axios/stripeAxios";
export const Checkout = () => {
  const { cart } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.userInfo);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stripeStatus = new URLSearchParams(window.location.search).get(
    "redirect_status"
  );
  const [shippingCost, setShippingCost] = useState(9.99);
  const [discount, setDiscount] = useState(19.99);
  const totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.orderQty * curr.price + shippingCost - discount;
  }, 0);

  const [activeStep, setactiveStep] = useState(0);
  const [payment, setPayment] = useState({
    method: "",
    totalAmount,
    isPaid: false,
  });
  const [userForm, setUserForm] = useState({});
  const [orderData, setOrderData] = useState({});
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    setOrderData({ orderItems: cart, user: userForm, payment });
  }, []);
  useEffect(() => {
    setUserForm({ ...user });
  }, [user]);

  // call stripe api to request client secret
  useEffect(() => {
    if (payment.method === "Cash on Delivery") {
      return;
    }
    async function getClientSecret() {
      const result = await postPaymentIntent({
        customer: user._id,
        payment: payment.method,
        totalAmount,
      });
      setClientSecret(result.clientSecret);
    }
    getClientSecret();
    dispatch(setModal({ isModalOpen: true, modalName: payment.method }));
  }, [payment]);

  useEffect(() => {
    setOrderData({ orderItems: cart, user: userForm, payment });
  }, [userForm, cart, payment, stripeStatus]);

  const [open, setopen] = useState(false);

  const handleOnSubmitOrder = async () => {
    const obj =
      orderData.user && orderData.payment && orderData.orderItems
        ? orderData
        : { orderItems: cart, user, payment: { ...payment, method: "card" } };

    if (stripeStatus === "succeeded") {
      setPayment({ ...payment, isPaid: true, method: "card" });
    }
    const pending = dispatch(postOrderAction(obj));
    setopen(true);
    const orderNumber = await pending;
    if (orderNumber) {
      navigate(`/cart/order/${orderNumber}`);
    }
    setopen(false);
  };

  useEffect(() => {
    if (stripeStatus === "succeeded") {
      handleOnSubmitOrder();
    }
  }, [stripeStatus]);
  return (
    <UserLayout>
      <Backdrop open={open} />
      {open && (
        <CircularProgress
          sx={{ position: "fixed", top: "50vh", left: "50vw", zIndex: 1 }}
          color="primary"
        />
      )}
      <Box
        sx={{
          p: 5,
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#e0f2f1",
        }}
      >
        <Box
          sx={{
            p: 2,
            width: { xs: "100%", md: "75%" },
            flexGrow: 1,
            backgroundColor: "white",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <CustomStepper activeStep={activeStep} />
          <OrderDetailsAccordian setactiveStep={setactiveStep} />
          <UserDetailsAccordian
            activeStep={activeStep}
            setactiveStep={setactiveStep}
            userForm={userForm}
            setUserForm={setUserForm}
          />
          <PaymentAccordian
            activeStep={activeStep}
            setactiveStep={setactiveStep}
            payment={payment}
            setPayment={setPayment}
            cart={cart}
          />
        </Box>
        <Box
          sx={{
            p: 2,
            flexGrow: 1,
            backgroundColor: "white",
            borderRadius: "12px",
          }}
        >
          <Typography>Your order</Typography>
          <Divider sx={{ mt: 3 }} />
          {cart.map((item) => (
            <Paper
              key={item._id}
              elevation={1}
              sx={{
                display: "flex",
                p: 1,
                borderRadius: "12px",
                gap: 3,
                mt: 2,
              }}
            >
              <div style={{ height: "auto", width: "80px" }}>
                <img
                  src={item.thumbnail}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="subtitle" color="grey">
                  ${item.price}
                </Typography>
                <Typography variant="h6"> Qty:{item.orderQty}</Typography>
              </Box>
            </Paper>
          ))}
          <Divider sx={{ mt: 2 }} />
          <Typography variant="h5">Total:{`$` + totalAmount}</Typography>
          <Button
            fullWidth
            variant="contained"
            endIcon={<LocalShippingIcon />}
            sx={{ mt: 2 }}
            color="success"
            onClick={handleOnSubmitOrder}
            disabled={
              cart.length === 0 ||
              user?._id === undefined ||
              payment.method === ""
            }
          >
            Place order
          </Button>
        </Box>
      </Box>
      {clientSecret && <StripeCheckout clientSecret={clientSecret} />}
    </UserLayout>
  );
};
