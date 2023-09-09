import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/cartSlice";
import { setModal } from "../../redux/modalSlice";
import { ItemAddedModal } from "../modal/ItemAddedModal";

export const AddToCart = ({ item }) => {
  // console.log(item);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleOnAdd = () => {
    dispatch(setCart([...cart, item]));
    // dispatch(setModal(true));
  };
  return (
    <>
      <ItemAddedModal item={item} />
      <Button
        variant="outlined"
        className="flex-grow-1"
        startIcon={<ShoppingCartCheckoutIcon />}
        onClick={handleOnAdd}
      >
        Buy
      </Button>
    </>
  );
};
