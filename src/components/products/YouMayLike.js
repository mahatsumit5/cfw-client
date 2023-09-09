import { Box, Typography } from "@mui/material";
import React from "react";
import CustomProductCard from "./ProductCard";

export const YouMayLike = ({ similarProduct }) => {
  return (
    <Box sx={{ display: "flex", gap: 3, flexDirection: "column" }}>
      <Typography variant="h6" style={{ fontWeight: "bolder" }}>
        You may also like
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <CustomProductCard products={similarProduct} />
      </Box>
    </Box>
  );
};
