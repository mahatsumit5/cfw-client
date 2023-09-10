import React from "react";

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
export const OrderSummary = () => {
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
          $9.99
        </Typography>
      </span>
      <span className="d-flex justify-content-between">
        <Typography variant="body2" align="left" color={"grey"}>
          Discount
        </Typography>{" "}
        <Typography variant="body2" color={"grey"}>
          $20.00
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
          $199.99
        </Typography>
      </span>
      <Button
        fullWidth
        variant="contained"
        color="success"
        startIcon={<LockIcon />}
      >
        Checkout
      </Button>
    </Paper>
  );
};
