import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductsByCat } from "../../axios/categoryAndProductAxios";
import CustomProductCard from "../../components/products/ProductCard";

export const ProductListing = () => {
  const { _id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getdata() {
      const { result } = await getProductsByCat({ _id });
      setProducts(result);
    }
    getdata();
  }, [_id]);
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
