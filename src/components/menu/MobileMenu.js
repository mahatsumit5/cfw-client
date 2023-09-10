import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
export const CustomMobileMenu = ({
  handleProfileMenuOpen,
  mobileAnchorEl,
  setMobileAnchorEl,
}) => {
  const open = Boolean(mobileAnchorEl);
  const handleMenuClose = () => {
    setMobileAnchorEl(null);
  };
  const menuId = "primary-search-account-menu";
  const renderMobileMenu = (
    <Menu
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={handleMenuClose}
        >
          <Typography sx={{ minWidth: 10, display: "flex", gap: "10px" }}>
            <Badge badgeContent={5} color="error">
              <NotificationsIcon color="primary" />
            </Badge>
          </Typography>
          <p>Notifications</p>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <Typography sx={{ minWidth: 10, display: "flex", gap: "10px" }}>
          <IconButton onClick={handleMenuClose}>
            <FavoriteIcon color="primary" />
          </IconButton>
        </Typography>
        <p>Favourite</p>
      </MenuItem>
      <MenuItem>
        <Typography sx={{ minWidth: 10, display: "flex", gap: "10px" }}>
          <IconButton onClick={handleMenuClose}>
            <Badge badgeContent={17} color="error">
              <ShoppingCartIcon color="secondary" />
            </Badge>
          </IconButton>
        </Typography>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <Typography
          title="Account settings"
          sx={{ minWidth: 10, display: "flex", gap: "10px" }}
        >
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
        </Typography>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return <div>{renderMobileMenu}</div>;
};
