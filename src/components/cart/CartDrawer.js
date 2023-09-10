import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Drawer,
  Icon,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartTable } from "../cart/CartTable";
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import { Cart } from "../../pages/cart/Cart";
import { OrderSummary } from "./OrderSummary";
export const CartDrawer = ({ toggleDrawer, totalItems, isOpen }) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={() => {
        toggleDrawer(undefined, false);
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
        <Link to="/cart">
          <Button
            fullWidth
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            endIcon={totalItems}
            color="primary"
          >
            Go to Cart
          </Button>
        </Link>
        <Paper>
          <CartTable />
        </Paper>
        <OrderSummary />
      </Box>
    </Drawer>
  );
};
