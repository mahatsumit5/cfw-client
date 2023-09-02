import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container } from "react-bootstrap";
import { SearchBar } from "../SearchBar/SearchBar";
import { CustomMobileMenu } from "../menu/MobileMenu";
import { ProfileMenu } from "../menu/ProfileMenu";
import { DesktopMenu } from "../menu/DesktopMenu";
export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  return (
    <Box className="  header d-flex shadow rounded justify-content-between  ">
      <div className=" fs-4 fw-bold  m-2">
        <Link to="/" className="navbar-brand">
          <p> CFW</p>
        </Link>
      </div>
      <div className="flex-grow-1 ">
        <Navbar expand="lg" className="">
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  THE CFW
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Link to="/" className="fs-6 nav-link fs-6 fw-medium ">
                    Men
                  </Link>
                  <Link to="/" className="nav-link fs-6 fw-medium ">
                    Women
                  </Link>
                  <Link to="/" className="nav-link fs-6 fw-medium ">
                    Kids
                  </Link>

                  <Link to="/" className="nav-link fs-6 fw-medium ">
                    Women
                  </Link>
                </Nav>
                <div className=" d-md-none flex-grow-1 ">
                  <SearchBar />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <div className="   mt-2 w-50 d-md-block flex-fill ">
        <SearchBar />
      </div>
      <div className="m-1">
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
        <DesktopMenu
          open={open}
          handleProfileMenuOpen={handleProfileMenuOpen}
        />
        <CustomMobileMenu
          handleProfileMenuOpen={handleProfileMenuOpen}
          mobileAnchorEl={mobileAnchorEl}
          setMobileAnchorEl={setMobileAnchorEl}
        />
        <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      </div>
    </Box>
  );
};
