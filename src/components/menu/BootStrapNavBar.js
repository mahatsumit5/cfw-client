import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Container } from "@mui/material";
import { SearchBar } from "../SearchBar/SearchBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";
export const BootStrapNavBar = () => {
  return (
    <Navbar expand="sm" className="">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              THE CFW
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3">
              <motion.div
                initial={{ borderBottom: "" }}
                whileHover={{ borderBottom: "1px solid skyblue" }}
                animate={{}}
              >
                <Link to="/" className=" nav-link fs-6 fw-medium ">
                  <Button endIcon={<ArrowDropDownIcon />}> Men</Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ borderBottom: "1px solid skyblue" }}>
                <Link to="/" className=" nav-link fs-6 fw-medium ">
                  <Button endIcon={<ArrowDropDownIcon />}> Women</Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ borderBottom: "1px solid skyblue" }}>
                <Link to="/" className=" nav-link fs-6 fw-medium ">
                  <Button endIcon={<ArrowDropDownIcon />}> Kids</Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ borderBottom: "1px solid skyblue" }}>
                <Link to="/" className=" nav-link fs-6 fw-medium ">
                  <Button endIcon={<ArrowDropDownIcon />}> Accessories</Button>
                </Link>
              </motion.div>
            </Nav>
            <div className=" d-sm-none flex-grow-1 ">
              <SearchBar />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
