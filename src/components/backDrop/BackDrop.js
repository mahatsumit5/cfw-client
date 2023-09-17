import { Backdrop, Box, CircularProgress } from "@mui/material";
import React from "react";

export const CustomBackDrop = ({ open }) => {
  return (
    <Backdrop sx={{ color: "#fff" }} open={open}>
      {" "}
      <CircularProgress
        sx={{ position: "fixed", top: "50vh", left: "50vw", zIndex: 1 }}
        color="primary"
      />
    </Backdrop>
  );
};
