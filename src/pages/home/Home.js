import React from "react";
import { CustomeCarousel } from "../../components/carousel/Carousel";

import { UserLayout } from "../../components/layout/UserLayout";
import BasicPagination from "../../components/pagination/MuiPagination";
import { HomePageProductListing } from "../../components/products/HomePageProductListing";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayData } from "../../redux/displayDataSlice";
export const Home = () => {
  const { products } = useSelector((store) => store.productInfo);
  const dispatch = useDispatch();
  const totalNumberOfCards = products.length;
  const cardsToShowOnOnePage = 4;
  const numberOfRequiredPagination = Math.ceil(
    totalNumberOfCards / cardsToShowOnOnePage
  );
  const [pageNumber, setPageNumber] = React.useState(1);
  const lastIndex = pageNumber * cardsToShowOnOnePage;
  const firstIndex = lastIndex - cardsToShowOnOnePage;
  const data = products.slice(firstIndex, lastIndex);
  dispatch(setDisplayData(data));
  return (
    <div className="landingPage">
      <UserLayout>
        <CustomeCarousel />
        <HomePageProductListing products={data} />
        <BasicPagination
          numberOfRequiredPagination={numberOfRequiredPagination}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </UserLayout>
    </div>
  );
};
