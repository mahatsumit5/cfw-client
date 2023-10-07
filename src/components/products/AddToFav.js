import { Button } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const AddToFav = () => {
  return (
    <Button variant="text" className="flex-grow-3" sx={{ marginLeft: 2 }}>
      <FavoriteIcon color="error" />
    </Button>
  );
};
