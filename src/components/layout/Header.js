import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BiLogOut,
  BiUser,
  BiSearchAlt,
  BiCartAdd,
  BiLogIn,
} from "react-icons/bi";
export const Header = () => {
  return (
    <div className="header">
      {" "}
      <Navbar expand="sm" className="header">
        <Container>
          <Link top="/" className="navbar-brand">
            cfw
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link ">
                <BiSearchAlt />
              </Link>
              <Link to="/" className="nav-link">
                <BiUser />
              </Link>
              <Link to="/" className="nav-link">
                <BiCartAdd />
              </Link>
              <Link to="/signup" className="nav-link">
                <BiLogOut />
              </Link>
              <Link to="/signin" className="nav-link">
                <BiLogIn />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
