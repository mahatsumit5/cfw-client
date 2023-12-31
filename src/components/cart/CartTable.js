import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItemFromCart, setCart } from "../../redux/cartSlice";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../redux/modalSlice";
import { CustomModal } from "../modal/CustomModal";
import { setSnackbar } from "../../redux/snackbarSlice";
export const CartTable = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [newOrder, setNeworder] = useState({ orderQty: 0 });
  const handleOnReduce = (item) => {
    if (item.orderQty === 1) {
      dispatch(removeItemFromCart(item._id));
      return;
    }
    setNeworder({ ...item, orderQty: item.orderQty - 1 });
  };
  const handleOnAdd = (item) => {
    if (item.orderQty === item.qty) {
      dispatch(
        setSnackbar({
          open: true,
          severity: "error",
          message: "Maximum limit reached",
          name: "alert",
        })
      );
      return;
    }
    setNeworder({ ...item, orderQty: item.orderQty + 1 });
  };
  useEffect(() => {
    dispatch(setCart(newOrder));
  }, [newOrder, dispatch]);
  return (
    <>
      {cart?.map((item) => (
        <React.Fragment key={item._id}>
          <Grid container spacing={2} sx={{ p: 1, flexWrap: "wrap" }}>
            <Grid item xs sx={{ minWidth: "100px" }}>
              <img
                src={item.thumbnail}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography>{item.title?.toUpperCase()}</Typography>
              <Typography>{item.slug}</Typography>
              <Typography></Typography>
              <Stack spacing={2} direction={"row"}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    dispatch(removeItemFromCart(item._id));
                  }}
                >
                  <DeleteIcon /> Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigate(`/product/${item.slug}`);
                  }}
                >
                  Edit <EditIcon />
                </Button>
              </Stack>
            </Grid>
            <Grid
              item
              xs
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { sm: "row", md: "column" },
                minWidth: "200px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: 2,
                  justifyContent: "space-between",
                  borderRadius: "12px",
                  borderColor: "skyblue",
                }}
              >
                <Button
                  variant="text"
                  onClick={() => {
                    handleOnReduce(item);
                  }}
                >
                  -
                </Button>

                <Button>{item.orderQty}</Button>

                <Button
                  variant="text"
                  onClick={() => {
                    handleOnAdd(item);
                  }}
                >
                  +
                </Button>
              </Box>
              <Typography variant="subtitle2" align="right" minWidth={100}>
                Total :${item.orderQty * item.price}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};
