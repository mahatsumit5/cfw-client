import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import CustomBreadCrumb from "../breadCrumb/BreadCrumb";
import { Container } from "@mui/material";

export const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CustomBreadCrumb />

        <main className="main ">{children}</main>
      </Container>
      <Footer />
    </>
  );
};
