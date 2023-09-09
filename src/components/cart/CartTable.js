import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import Favorite from "@mui/icons-material/Favorite";
import { removeItemFromCart, setCart } from "../../redux/cartSlice";
export const CartTable = () => {
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
    setNeworder({ ...item, orderQty: item.orderQty + 1 });
  };
  useEffect(() => {
    dispatch(setCart([...cart, newOrder]));
  }, [dispatch, newOrder]);
  return (
    <>
      {cart?.map((item, index) => (
        <Grid container spacing={2} key={item._id} sx={{ p: 1 }}>
          <Grid item xs>
            <img
              src={
                process.env.REACT_APP_ROOTSERVER +
                "/" +
                item.thumbnail?.slice(6)
              }
              alt=""
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
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
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  dispatch(removeItemFromCart(item._id));
                }}
                fullWidth={true}
              >
                Remove
              </Button>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Favorite />}
              ></Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Paper elevation={0} sx={{ display: "flex" }}>
              <Button
                fullWidth={true}
                onClick={() => {
                  handleOnReduce(item);
                }}
              >
                -
              </Button>
              <Button>
                <TextField value={item.orderQty}> {item.orderQty}</TextField>
              </Button>
              <Button
                fullWidth={true}
                onClick={() => {
                  handleOnAdd(item);
                }}
              >
                +
              </Button>
            </Paper>
            <Typography variant="h6">${item.price}</Typography> <br />
          </Grid>
        </Grid>
      ))}
    </>
  );
};
