import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Box, Container, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductsByCat } from "../../axios/categoryAndProductAxios";
import CustomProductCard from "../../components/products/ProductCard";

export const ProductListing = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [skeleton, setSkeleton] = useState(false);
  useEffect(() => {
    async function getdata() {
      const pending = getProductsByCat({ slug });
      setSkeleton(true);
      const { result } = await pending;
      setSkeleton(false);
      setProducts(result);
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
          {products?.length ? (
            <CustomProductCard products={products} />
          ) : (
            <>
              {skeleton && (
                <Skeleton variant="rectangle" height={350} width={250} />
              )}
              <Typography>No Products found</Typography>
            </>
          )}
        </Box>
      </Container>
    </UserLayout>
  );
};
