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
import { useDispatch, useSelector } from "react-redux";
import jacket from "../../assests/jacket.avif";
import { CartDrawer } from "../cart/CartDrawer";
import { FavouriteDrawer } from "../favourite/FavouriteDrawer";
import PersonIcon from "@mui/icons-material/Person";
export const DesktopMenu = ({
  open,
  handleProfileMenuOpen,
  searchBar,
  setSearchBar,
}) => {
  const { cart } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  let totalItems = 0;
  cart.map((item) => (totalItems += item?.orderQty));
  const [isOpen, setIsOpen] = useState(false);
  const [favDrawer, setFavDrawer] = useState(false);
  const toggleDrawer = (b) => {
    setIsOpen(b);
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
      <FavouriteDrawer favDrawer={favDrawer} setFavDrawer={setFavDrawer} />
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
        // sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Typography sx={{ minWidth: 10 }}>
          <SearchIcon color="primary" />
        </Typography>
      </IconButton>
      {/* <IconButton size="large" aria-label="search" color="inherit">
        <Typography sx={{ minWidth: 10 }}>
          <Badge badgeContent={6} color="error">
            <NotificationsIcon color="primary" />
          </Badge>
        </Typography>
      </IconButton> */}
      <Typography sx={{ minWidth: 10 }}>
        <IconButton
          onClick={() => {
            if (user._id) {
              return setFavDrawer(true);
            }
          }}
        >
          <Badge badgeContent={user?.favouriteItem?.length} color="info">
            <FavoriteIcon color="error" />
          </Badge>
        </IconButton>
      </Typography>
      <Typography sx={{ minWidth: 10 }}>
        <IconButton
          onClick={() => {
            toggleDrawer(true);
          }}
        >
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon color="primary" />
          </Badge>
        </IconButton>
      </Typography>
      <Tooltip title="profile" sx={{ minWidth: 10 }}>
        <IconButton
          onClick={handleProfileMenuOpen}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {user._id ? (
            <Avatar
              sx={{ width: 32, height: 32 }}
              alt="image"
              src={jacket}
            ></Avatar>
          ) : (
            <PersonIcon color="primary" />
          )}
        </IconButton>
      </Tooltip>{" "}
    </Box>
  );
};
