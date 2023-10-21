import React from "react";
import { CustomeCarousel } from "../../components/carousel/Carousel";
import { UserLayout } from "../../components/layout/UserLayout";
import BasicPagination from "../../components/pagination/MuiPagination";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayData } from "../../redux/displayDataSlice";
import { Hero } from "../../components/layout/Hero";
import { ProductCatagories } from "../../components/Home/ProductCatagories";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
export const Home = () => {
  const { products } = useSelector((store) => store.productInfo);
  const { catagories } = useSelector((store) => store.catagoryInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDisplayData(catagories));
  }, [catagories]);
  return (
    <UserLayout>
      <Box>
        <CustomeCarousel />
      </Box>
      <Hero />
      <ProductCatagories />
    </UserLayout>
  );
};
