import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { removeItemFromCart } from "../../redux/cartSlice";
import { CartTable } from "../../components/cart/CartTable";

export const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  let totalItems = 0;
  cart.map((item) => (totalItems += item?.orderQty));
  return (
    <div>
      <Header />
      <main className="main">
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
                flexWrap: "wrap",
              },
            }}
          >
            <Paper sx={{ flexGrow: 3, p: 2 }}>
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
            <Paper sx={{ flexGrow: 2, p: 2 }}>SideBar</Paper>
          </Box>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
