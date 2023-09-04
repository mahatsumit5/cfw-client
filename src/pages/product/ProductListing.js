import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { getProducts } from "../../axios/categoryAndProductAxios";
import CustomProductCard from "../../components/products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayData } from "../../redux/displayDataSlice";

export const ProductListing = () => {
  const { slug, _id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getdata() {
      const { result } = await getProducts({ slug, _id });
      setProducts(result);
    }
    getdata();
  }, [slug, _id]);
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
          {products?.length ? (
            <CustomProductCard products={products} />
          ) : (
            <h1>No products found</h1>
          )}
        </Box>
      </Container>
    </UserLayout>
  );
};
