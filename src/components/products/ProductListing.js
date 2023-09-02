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

export const ProductListing = () => {
  const { products } = useSelector((store) => store.productInfo);
  const { catagories } = useSelector((store) => store.catagoryInfo);
  return (
    <Container
      maxWidth="xxl"
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          p: 2,
          width: 350,
          height: 700,
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" color="text.primary">
          Catagories
        </Typography>
        <Divider />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
          }}
        >
          {catagories?.map((cat) => (
            <>
              <Button variant="text" size="large">
                <ListItem>{cat.title}</ListItem>
              </Button>
              <Divider />
            </>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexGrow: 1,
          width: "60vw",
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
