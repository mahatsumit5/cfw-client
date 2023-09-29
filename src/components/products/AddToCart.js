import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/cartSlice";
import { setModal } from "../../redux/modalSlice";
import { ItemAddedModal } from "../modal/ItemAddedModal";

export const AddToCart = ({ item }) => {
  const dispatch = useDispatch();
  const { modalName } = useSelector((store) => store.modalInfo);
  const handleOnAdd = () => {
    dispatch(setCart(item));
    dispatch(setModal({ isModalOpen: true, modalName: "addedTocart" }));
  };
  return (
    <>
      {modalName === "addedTocart" && <ItemAddedModal item={item} />}
      <Button
        variant="contained"
        className="flex-grow-1"
        startIcon={<ShoppingCartCheckoutIcon />}
        onClick={handleOnAdd}
      >
        Add
      </Button>
    </>
  );
};
