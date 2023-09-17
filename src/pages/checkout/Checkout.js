import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Box } from "@mui/system";
import { Accordion, Button, Divider, Paper, Typography } from "@mui/material";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { CustomStepper } from "../../components/stepper/stepper";
import { OrderDetailsAccordian } from "../../components/checkout/OrderDetailsAccordian";
import { UserDetailsAccordian } from "../../components/checkout/UserDetailsAccordian";
import { PaymentAccordian } from "../../components/checkout/PaymentAccordian";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { postOrderAction } from "../../action/orderAction";
export const Checkout = () => {
  const { cart } = useSelector((store) => store.cart);

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
    user.verificationCode = undefined;
    user.token = undefined;
    user.status = undefined;
    user.favouriteItem = undefined;
    user.createdAt = undefined;
    user.updatedAt = undefined;
    user.isVerified = undefined;
    user.__v = undefined;
    setUserForm({ ...user });
  }, [user]);

  useEffect(() => {
    setPayment({ ...payment, totalAmount, isPaid: false });
    setOrderData({ orderItems: cart, user: userForm, payment });
  }, [userForm, cart, payment]);
  const dispatch = useDispatch();
  const handleOnSubmitOrder = async () => {
    const isSuccessfull = await dispatch(postOrderAction(orderData));
    if (isSuccessfull) {
      // navigate to other pages
    }
  };
  return (
    <UserLayout>
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
            flexGrow: 3,
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
                  src={
                    process.env.REACT_APP_ROOTSERVER +
                    "/" +
                    item.thumbnail?.slice(6)
                  }
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
            // disabled={
            //   cart.length === 0 || user?._id === undefined || payment.
            // }
          >
            Place order
          </Button>
        </Box>
      </Box>
    </UserLayout>
  );
};
