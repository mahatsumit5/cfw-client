import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Box } from "@mui/system";
import {
  Accordion,
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  LinearProgress,
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
import { resetCart } from "../../redux/cartSlice";
import { payWithCard } from "../../axios/orderAxios";
export const Checkout = () => {
  const { cart } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  const [shippingCost, setShippingCost] = useState(9.99);
  const [discount, setDiscount] = useState(19.99);
  const totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.orderQty * curr.price + shippingCost - discount;
  }, 0);

  const [activeStep, setactiveStep] = useState(0);
  const { user } = useSelector((store) => store.userInfo);
  const [payment, setPayment] = useState({ method: "" });
  const [userForm, setUserForm] = useState({});
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    setUserForm({ ...user });
  }, [user]);

  useEffect(() => {
    setPayment({ ...payment, totalAmount, isPaid: false });
    setOrderData({ orderItems: cart, user: userForm, payment });
  }, [userForm, cart, payment]);
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const handleOnSubmitOrder = async () => {
    if (payment.method === "Pay with credit card") {
      payWithCard(orderData).then(({ url, session }) => {
        window.open(url);
        dispatch(postOrderAction(orderData));
      });
      return;
    }
    const pending = dispatch(postOrderAction(orderData));
    setopen(true);
    const orderNumber = await pending;
    console.log(orderNumber);
    navigate(`/cart/order/${orderNumber}`);

    setopen(false);
  };
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
    </UserLayout>
  );
};
