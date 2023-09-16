import React, { useState } from "react";

import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
export const OrderSummary = () => {
  const location = useLocation();
  const { cart } = useSelector((store) => store.cart);
  const [shippingCost, setShippingCost] = useState(9.99);
  const [discount, setDiscount] = useState(19.99);
  const { user } = useSelector((store) => store.userInfo);
  const totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.orderQty * curr.price + shippingCost - discount;
  }, 0);
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        flexGrow: 3,
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: "auto",
        gap: 2,
        justifyContent: "space-around",
        minWidth: "320px",
      }}
    >
      <Typography variant="h6" align="left">
        Order Summary
      </Typography>

      <Stack direction="row" gap={1}>
        <TextField variant="filled" label="promo code" flexGrow="1" />
        <Button variant="contained" disableElevation endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      <span className="d-flex justify-content-between">
        <Typography variant="body2" align="left" color={"grey"}>
          Shipping cost
        </Typography>
        <Typography variant="body2" color={"grey"}>
          ${shippingCost}
        </Typography>
      </span>
      <span className="d-flex justify-content-between">
        <Typography variant="body2" align="left" color={"grey"}>
          Discount
        </Typography>{" "}
        <Typography variant="body2" color={"grey"}>
          ${discount}
        </Typography>
      </span>
      <span className="d-flex justify-content-between">
        <Typography
          variant="body1"
          align="left"
          sx={{ fontSize: 20, fontWeight: "bold" }}
        >
          Estimated Total
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 16, fontWeight: "medium" }}>
          ${totalAmount}
        </Typography>
      </span>
      {user?._id ? (
        <Link to="/checkout">
          <Button
            fullWidth
            variant="contained"
            color="success"
            startIcon={<LockIcon />}
          >
            Checkout
          </Button>
        </Link>
      ) : (
        <Button
          fullWidth
          variant="contained"
          color="primary"
          endIcon={<LoginIcon />}
          onClick={() => {
            navigate("/signin");
          }}
        >
          Log in
        </Button>
      )}
    </Paper>
  );
};
