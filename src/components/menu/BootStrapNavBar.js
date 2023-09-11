import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Container, ThemeProvider, createTheme } from "@mui/material";
import { SearchBar } from "../SearchBar/SearchBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { blueGrey, grey, lightGreen, lime, yellow } from "@mui/material/colors";
export const BootStrapNavBar = () => {
  const theme = createTheme({
    palette: {
      primary: blueGrey,
    },
  });

  const { catalogue } = useSelector((store) => store.mainCatalogueInfo);
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Classic Fashion Wears
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3">
              {catalogue?.map(({ _id, title }) => (
                <motion.div
                  key={_id}
                  initial={{ borderBottom: "" }}
                  whileHover={{
                    // border: "1px solid skyblue",
                    backgroundColor: "lightgray",
                  }}
                  animate={{}}
                >
                  <Link to="/" className=" nav-link fs-6 fw-medium ">
                    <ThemeProvider theme={theme}>
                      {" "}
                      <Button
                        endIcon={<ArrowDropDownIcon />}
                        color={"primary"}
                        size="small"
                      >
                        {" "}
                        {title}
                      </Button>
                    </ThemeProvider>
                  </Link>
                </motion.div>
              ))}
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
