import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import CustomProductCard from "../../components/products/ProductCard";
import { Box } from "@mui/material";

export const Wishlist = () => {
  const { favouriteItem } = useSelector((store) => store.userInfo.user);
  return (
    <UserLayout>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <CustomProductCard products={favouriteItem} />
      </Box>
    </UserLayout>
  );
};
