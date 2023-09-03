import React from "react";
import { CustomeCarousel } from "../../components/carousel/Carousel";

import { UserLayout } from "../../components/layout/UserLayout";
import BasicPagination from "../../components/pagination/MuiPagination";
import { HomePageProductListing } from "../../components/products/HomePageProductListing";
export const Home = () => {
  return (
    <div className="landingPage">
      <UserLayout>
        <CustomeCarousel />
        <HomePageProductListing />
        <BasicPagination />
      </UserLayout>
    </div>
  );
};
