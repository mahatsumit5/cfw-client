import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductsByCat } from "../../axios/categoryAndProductAxios";

export const YouMayLike = () => {
  const [similarProduct, setSimilarProduct] = useState([]);
  const { product } = useSelector((store) => store.singleProduct);
  const { slug } = useParams();

  async function getSimilarProduct() {
    const { result } = await getProductsByCat({ slug });

    setSimilarProduct(result);
  }
  useEffect(() => {
    getSimilarProduct();
  }, [product]);
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
