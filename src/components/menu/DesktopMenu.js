import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Badge,
  Box,
  Button,
  Drawer,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartTable } from "../cart/CartTable";
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import { CartDrawer } from "../cart/CartDrawer";
export const DesktopMenu = ({ open, handleProfileMenuOpen }) => {
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
        display: { xs: "none", sm: "flex" },
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
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Typography sx={{ minWidth: 10 }}>
          <Badge badgeContent={5} color="error">
            <NotificationsIcon color="primary" />
          </Badge>
        </Typography>
      </IconButton>
      <Typography sx={{ minWidth: 10 }}>
        <IconButton>
          <FavoriteIcon color="primary" />
        </IconButton>
      </Typography>
      <Typography sx={{ minWidth: 10 }}>
        <IconButton
          onClick={(e) => {
            toggleDrawer(e, true); // navigate("/cart");
          }}
        >
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon color="secondary" />
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
