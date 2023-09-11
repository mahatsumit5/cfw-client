import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CartDrawer } from "../cart/CartDrawer";
export const DesktopMenu = ({
  open,
  handleProfileMenuOpen,
  searchBar,
  setSearchBar,
}) => {
  const { cart } = useSelector((store) => store.cart);
  let totalItems = 0;
  cart.map((item) => (totalItems += item?.orderQty));
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (event, open) => {
    setIsOpen(open);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
      open={open}
      className=""
    >
      <CartDrawer
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        totalItems={totalItems}
      />
      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
        onClick={() => {
          setSearchBar(!searchBar);
        }}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Typography sx={{ minWidth: 10 }}>
          <SearchIcon color="primary" />
        </Typography>
      </IconButton>
      <IconButton size="large" aria-label="search" color="inherit">
        <Typography sx={{ minWidth: 10 }}>
          <Badge badgeContent={6} color="error">
            <NotificationsIcon color="primary" />
          </Badge>
        </Typography>
      </IconButton>
      <Typography sx={{ minWidth: 10 }}>
        <IconButton>
          <FavoriteIcon color="error" />
        </IconButton>
      </Typography>
      <Typography sx={{ minWidth: 10 }}>
        <IconButton
          onClick={(e) => {
            toggleDrawer(e, true); // navigate("/cart");
          }}
        >
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon color="primary" />
          </Badge>
        </IconButton>
      </Typography>
      <Tooltip title="Account settings" sx={{ minWidth: 10 }}>
        <IconButton
          onClick={handleProfileMenuOpen}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}></Avatar>
        </IconButton>
      </Tooltip>{" "}
    </Box>
  );
};
