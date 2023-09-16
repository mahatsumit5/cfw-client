import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Box
      sx={{
        minHeight: "30vh",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Typography sx={{ margin: "auto" }}>
        &copy;Copyright © 2019-{date} by CFW{" "}
      </Typography>
    </Box>
  );
};
