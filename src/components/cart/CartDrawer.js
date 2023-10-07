import React from "react";
import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { CartTable } from "../cart/CartTable";

import { OrderSummary } from "./OrderSummary";
export const CartDrawer = ({ toggleDrawer, totalItems, isOpen }) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={() => {
        toggleDrawer(false);
      }}
    >
      <Box
        sx={{
          width: 350,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {totalItems > 0 ? (
          <>
            <Link to="/cart">
              <Button
                fullWidth
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                endIcon={totalItems}
                color="primary"
              >
                View Cart
              </Button>
            </Link>
            <Paper>
              <CartTable />
            </Paper>
            <OrderSummary />{" "}
          </>
        ) : (
          <>
            <Typography variant="h6">Your cart is empty.</Typography>
            <Button variant="contained" color="info">
              Continue Shopping
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};
