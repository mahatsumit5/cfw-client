import React from "react";
import { CustomeCarousel } from "../../components/carousel/Carousel";
import image1 from "../../assests/image.jpg";
import image2 from "../../assests/image2.jpg";
import image3 from "../../assests/image3.jpg";
import { UserLayout } from "../../components/layout/UserLayout";
import BasicPagination from "../../components/pagination/MuiPagination";
import { ProductListing } from "../../components/products/ProductListing";
export const Home = () => {
  return (
    <div className="landingPage">
      <UserLayout>
        <CustomeCarousel />
        <ProductListing />

        <BasicPagination />
      </UserLayout>
    </div>
  );
};
