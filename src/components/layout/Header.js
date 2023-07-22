import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
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
      <Navbar expand="md" className="header">
        <Container>
          <Link to="/" className="navbar-brand">
            cfw
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link ">
                <BiSearchAlt />
                SEARCH
              </Link>
              <Link to="/" className="nav-link">
                <BiUser />
                PROFILE
              </Link>
              <Link to="/" className="nav-link">
                <BiCartAdd />
                CART
              </Link>
              <Link to="/signup" className="nav-link">
                <BiLogOut />
                LOGOUT
              </Link>
              <Link to="/signin" className="nav-link">
                <BiLogIn />
                LOGIN
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
