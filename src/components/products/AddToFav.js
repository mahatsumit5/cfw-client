import { Button } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const AddToFav = () => {
  return (
    <Button
      variant="error"
      className="flex-grow-3"
      endIcon={<FavoriteIcon color="error" />}
    ></Button>
  );
};
