import { Box, Container, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import CustomProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { SideBar } from "../menu/SideBar";
import { CustomMenu } from "../menu/CustomMenu";
export const HomePageProductListing = () => {
  const { displayData } = useSelector((store) => store.display);

  return (
    <Container
      maxWidth="xxl"
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "flex-start",
        flexDirection: { md: "row", xs: "column" },
        marginTop: 5,
      }}
    >
      <CustomMenu />

      <SideBar />
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexGrow: 1,
          justifyContent: "center",
          // alignContent: "center",
          flexWrap: "wrap",
          height: "auto",
          // boxShadow: 2,
          borderRadius: 3,
        }}
      >
        {displayData ? (
          <CustomProductCard products={displayData} />
        ) : (
          <Skeleton variant="rectangular" width={250} height={450} />
        )}
      </Box>
    </Container>
  );
};
