import { Backdrop, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const BackdropLoader = () => {
  const { open } = useSelector((store) => store.backDrop);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress
        sx={{ position: "fixed", top: "50vh", left: "50vw", zIndex: 1 }}
        color="primary"
      >
        <Typography
          sx={{
            position: "fixed",
            top: "52vh",
            left: "50vw",
            zIndex: 1,
            color: "white",
          }}
        >
          loading
        </Typography>{" "}
      </CircularProgress>
    </Backdrop>
  );
};
