import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { logOutUser } from "../../axios/userAxios";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Divider } from "@mui/material";
import jacket from "../../assests/jacket.avif";

export const ProfileMenu = ({ anchorEl, setAnchorEl }) => {
  const { user } = useSelector((store) => store.userInfo);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOnLogout = (_id) => {
    localStorage.clear();
    sessionStorage.clear();
    logOutUser(_id);
    window.location.reload(false); // reload the page after logout
  };
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      id="Profile-Menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Avatar fontSize="small" alt="profile" src={jacket} />
        </ListItemIcon>
        {user?.fName?.toUpperCase()}
      </MenuItem>
      <Divider />

      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <FavoriteIcon fontSize="small" color="error" />
        </ListItemIcon>
        Wishlist
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>

      <MenuItem
        onClick={() => {
          handleOnLogout(user._id);
        }}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  return <div>{renderProfileMenu}</div>;
};
