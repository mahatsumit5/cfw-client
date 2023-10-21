import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { SearchBar } from "../SearchBar/SearchBar";
import { ProfileMenu } from "../menu/ProfileMenu";
import { DesktopMenu } from "../menu/DesktopMenu";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
export const Header = () => {
  const { user } = useSelector((store) => store.userInfo);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
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
        p: 2,
        // backgroundColor: "aliceblue",
      }}
      className="header shadow"
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flexGrow: 3,
            textAlign: "left",
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
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
            flexGrow: 3,
            textAlign: "left",
            display: { xs: "block", sm: "none", md: "none", lg: "none" },
          }}
        >
          <Link className="nav-link" to="/">
            <Typography variant="h6" mt={1}>
              CFW
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
      </Container>
    </Box>
  );
};
