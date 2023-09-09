import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const DesktopMenu = ({ open, handleProfileMenuOpen }) => {
  const { cart } = useSelector((store) => store.cart);
  const navigate = useNavigate();
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
          onClick={() => {
            navigate("/cart");
          }}
        >
          <Badge badgeContent={cart?.length} color="error">
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
