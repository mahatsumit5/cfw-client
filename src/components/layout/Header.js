import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchBar } from "../SearchBar/SearchBar";
import { CustomMobileMenu } from "../menu/MobileMenu";
import { ProfileMenu } from "../menu/ProfileMenu";
import { DesktopMenu } from "../menu/DesktopMenu";
import { Typography } from "@mui/material";
import { BootStrapNavBar } from "../menu/BootStrapNavBar";
import { useSelector } from "react-redux";
export const Header = () => {
  const { user } = useSelector((store) => store.userInfo);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [searchBar, setSearchBar] = useState(false);
  const handleProfileMenuOpen = (event) => {
    if (!user._id) {
      navigate("/signin");
      return;
    }
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { md: "row-reverse", xs: "row-reverse", lg: "column" },
        alignItems: "center",
      }}
      className="header shadow"
    >
      <Box
        sx={{
          display: "flex",

          p: 1,
          justifyContent: "space-between",
          width: { sm: "100%", md: "80%" },
        }}
      >
        <Box
          sx={{
            flexGrow: 3,
            textAlign: "left",
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        >
          <Link className="nav-link" to="/">
            <Typography variant="h5" mt={1}>
              Classic Fashion Wears
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            flexGrow: 2,

            display: "flex",
            justifyContent: "end",
          }}
        >
          {searchBar && <SearchBar />}

          <DesktopMenu
            open={open}
            handleProfileMenuOpen={handleProfileMenuOpen}
            searchBar={searchBar}
            setSearchBar={setSearchBar}
          />

          <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Box>
      </Box>
      <Box>
        <BootStrapNavBar />
      </Box>
    </Box>
  );
};
