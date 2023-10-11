import { Button } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addTofavAction } from "../../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../../redux/snackbarSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const AddToFav = ({ item }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.userInfo);
  const favIcons = {
    redHeart: <FavoriteIcon color="error" />,
    borderHeart: <FavoriteBorderIcon color="secondary" />,
  };
  const handleOnAddToFav = async (item) => {
    const { status, message } = await dispatch(
      addTofavAction({
        _id: user?._id,
        fav: item,
      })
    );
    dispatch(
      setSnackbar({
        open: true,
        severity: status,
        message: message.toUpperCase(),
        name: "favouriteNotification",
      })
    );
  };
  return (
    <Button
      variant="text"
      className="flex-grow-3"
      sx={{ marginLeft: 2 }}
      onClick={() => {
        handleOnAddToFav(item);
      }}
    >
      {user?.favouriteItem?.some((i) => i.sku === item.sku)
        ? favIcons["redHeart"]
        : favIcons["borderHeart"]}{" "}
    </Button>
  );
};
