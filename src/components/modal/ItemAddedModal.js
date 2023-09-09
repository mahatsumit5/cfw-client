import React from "react";
import { CustomModal } from "./CustomModal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../redux/modalSlice";
import { Box, Button, Typography } from "@mui/material";

export const ItemAddedModal = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <CustomModal>
      <Typography variant="h5">Success</Typography>
      <Typography variant="body">
        Your product has been added to the cart.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <div style={{ width: "100px", height: "100px" }}>
          <img
            src={process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div>
          <Typography variant="subtitle2">{item.title}</Typography>
          <Typography color={"grey"}>${item.price}</Typography>
          <Typography>qty: 5</Typography>
        </div>
      </Box>
      <Box sx={{ width: "100%", display: "flex", gap: 2, marginTop: 2 }}>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(setModal(false));
          }}
        >
          {" "}
          Continue
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/cart");
          }}
        >
          View Cart
        </Button>
      </Box>
    </CustomModal>
  );
};
