import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { CartTable } from "../../components/cart/CartTable";
import { OrderSummary } from "../../components/cart/OrderSummary";
import { UserLayout } from "../../components/layout/UserLayout";
export const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  let totalItems = 0;
  cart.map((item) => (totalItems += item?.orderQty));
  return (
    <UserLayout>
      <Container
        maxWidth="xl"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <div>
          <Typography variant="h4">Shopping Cart</Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            flexDirection: {
              xs: "column",
              md: "row",
              lg: "row",
            },
          }}
        >
          <Paper sx={{ flexGrow: 1, p: 2 }}>
            <span className="d-flex justify-content-between">
              <Typography variant="h6">Cart</Typography>
              <Typography variant="h6">{totalItems} items</Typography>
            </span>
            <div>
              {totalItems > 0 ? (
                <CartTable />
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    window.location = "/";
                  }}
                >
                  Go back shopping
                </Button>
              )}
            </div>
          </Paper>
          <OrderSummary />
        </Box>
      </Container>
    </UserLayout>
  );
};
