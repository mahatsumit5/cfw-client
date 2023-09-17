import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Box } from "@mui/system";
import { Accordion, Divider, Paper, Typography } from "@mui/material";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { CustomStepper } from "../../components/stepper/stepper";
import { OrderDetailsAccordian } from "../../components/checkout/OrderDetailsAccordian";
import { UserDetailsAccordian } from "../../components/checkout/UserDetailsAccordian";
import { PaymentAccordian } from "../../components/checkout/PaymentAccordian";

export const Checkout = () => {
  const { cart } = useSelector((store) => store.cart);
  const [cartData, setCartData] = useState([]);
  const [activeStep, setactiveStep] = useState(0);

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
            flexGrow: 4,
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
          />
          <PaymentAccordian
            activeStep={activeStep}
            setactiveStep={setactiveStep}
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
          <Typography variant="h5">Total</Typography>
        </Box>
      </Box>
    </UserLayout>
  );
};
