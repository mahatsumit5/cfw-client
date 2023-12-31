import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { getOrder } from "../../axios/orderAxios";
import { wrap } from "framer-motion";

export const OrderConfirmationPage = () => {
  const { _id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    async function getData() {
      const { result } = await getOrder(_id);
      setOrder(result);
    }
    getData();
  }, [_id]);
  return (
    <UserLayout>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "column" },
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 2,
          flexWrap: wrap,
        }}
      >
        <Box sx={{ display: "grid", gap: 2 }} width={"40%"}>
          <Typography variant="h5">Order Summary</Typography>
          <Typography variant="h5">
            Your order number is: {order._id}
          </Typography>
        </Box>
        <Box sx={{ display: "grid", gap: 2 }} width={"60%"}>
          <Typography variant="h5">Thank you for your purchase!</Typography>
          <Typography variant="body2">
            Your order will be processed within 24hours during working days.We
            will notify you via email once your order has been shipped.
          </Typography>
          <Typography variant="h6">Billing address</Typography>
          <Paper elevation={0}>
            <div className="d-flex gap-5">
              <Typography>Name</Typography>
              <Typography>{order.user?.fName + order.user?.lName}</Typography>
            </div>
            <div className="d-flex gap-5">
              <Typography>Address</Typography>
              <Typography>{order.user?.address}</Typography>
            </div>
            <div className="d-flex gap-5">
              <Typography>Phone</Typography>
              <Typography>{order.user?.phone}</Typography>
            </div>
            <div className="d-flex gap-5">
              <Typography>Email</Typography>
              <Typography>{order.user?.email}</Typography>
            </div>
          </Paper>

          <Button fullWidth variant="contained">
            Track{" "}
          </Button>
        </Box>
      </Container>
    </UserLayout>
  );
};
