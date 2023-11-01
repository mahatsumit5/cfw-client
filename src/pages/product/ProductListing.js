import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Box, Container, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCat,
} from "../../axios/categoryAndProductAxios";
import CustomProductCard from "../../components/products/ProductCard";
import BasicPagination from "../../components/pagination/MuiPagination";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayData } from "../../redux/displayDataSlice";
import { setProductsByCat } from "../../redux/productsByCatagory";

export const ProductListing = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [skeleton, setSkeleton] = useState(false);
  const { displayData } = useSelector((store) => store.display);
  const { products } = useSelector((store) => store.productInfo);
  useEffect(() => {
    async function getdata() {
      const pending = getProductsByCat({ slug });
      setSkeleton(true);
      const { result } = await pending;
      setSkeleton(false);
      dispatch(setProductsByCat(result));
      dispatch(setDisplayData(result));
    }
    getdata();
  }, [slug]);
  return (
    <UserLayout>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {displayData?.length ? (
            <CustomProductCard products={displayData} />
          ) : (
            <>
              {skeleton && (
                <Skeleton variant="rectangle" height={350} width={250}>
                  <Typography>No Products found</Typography>
                </Skeleton>
              )}
            </>
          )}
        </Box>
        <BasicPagination data={products} />
      </Container>
    </UserLayout>
  );
};
