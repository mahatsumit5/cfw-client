import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import CustomProductCard from "../products/ProductCard";
import { useSelector } from "react-redux";

export const FavouriteDrawer = ({ favDrawer, setFavDrawer }) => {
  const { user } = useSelector((store) => store.userInfo);
  return (
    <Drawer
      anchor="bottom"
      open={favDrawer}
      onClose={() => {
        setFavDrawer(false);
      }}
    >
      <Box
        sx={{
          p: 2,
          minHeight: 200,
          height: "auto",
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user?._id ? (
          <CustomProductCard products={user.favouriteItem} />
        ) : (
          <Typography variant="h3">
            Please login to view your favourites
          </Typography>
        )}
      </Box>
    </Drawer>
  );
};
