import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import CustomProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SideBar } from "../menu/SideBar";
import { CustomMenu } from "../menu/CustomMenu";

export const HomePageProductListing = () => {
  const { products } = useSelector((store) => store.productInfo);
  return (
    <Container
      maxWidth="xxl"
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "flex-start",
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <CustomMenu />

      <SideBar />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexGrow: 1,
          // width: "60vw",
          justifyContent: "space-around",
          flexWrap: "wrap",
          height: "auto",
        }}
      >
        <CustomProductCard products={products} />
      </Box>
    </Container>
  );
};
