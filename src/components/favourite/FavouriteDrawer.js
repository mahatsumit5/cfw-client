import { Alert, Box, Drawer, Snackbar, Typography } from "@mui/material";
import React from "react";
import CustomProductCard from "../products/ProductCard";
import { useSelector } from "react-redux";
import { setSnackbar } from "../../redux/snackbarSlice";

export const FavouriteDrawer = ({ favDrawer, setFavDrawer }) => {
  const { user } = useSelector((store) => store.userInfo);
  const { open } = useSelector((store) => store.snackBar);

  if (user._id)
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
            display: "flex",
            minWidth: "1000px",
            gap: 2,
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignItems: "center",
            overflowX: "auto",
          }}
        >
          {user?.favouriteItem?.length ? (
            <CustomProductCard products={user.favouriteItem} />
          ) : (
            <Typography variant="body">
              You do not have any items in your favourite.
            </Typography>
          )}
        </Box>
      </Drawer>
    );
  return (
    <>
      <Snackbar
        open={open}
        // anchorOrigin={"bottom-left"}
        autoHideDuration={1000}
        onClose={() => {
          setSnackbar({ open: false });
        }}
        width={"100%"}
      >
        <Alert severity={"info"}>Please login first</Alert>
      </Snackbar>
    </>
  );
};
