import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import { getProducts } from "../../axios/categoryAndProductAxios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomProductCard from "../../components/products/ProductCard";
export const ProductLandingPage = () => {
  const { slug, _id } = useParams();
  const [product, setproduct] = useState({});
  const [similarProduct, setSimilarproduct] = useState([]);
  useEffect(() => {
    async function getdata() {
      const { data } = await getProducts({ slug, _id });
      setproduct(data);
      const obj = {
        _id: data.parentCat,
        slug: data.slug,
      };
      const { result } = data?._id && (await getProducts(obj));
      setSimilarproduct(result);
    }
    getdata();
  }, [slug, _id]);
  return (
    <div>
      <UserLayout>
        {product?._id ? (
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",

              flexWrap: "wrap",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                p: 2,
                boxShadow: 6,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 500,
                    backgroundColor: "primary.dark",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  <img
                    src={
                      process.env.REACT_APP_ROOTSERVER +
                      "/" +
                      product.thumbnail?.slice(6)
                    }
                    alt={product.title}
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  gap: 5,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack direction="column" gap={1}>
                  <Typography variant="h5">{product.title}</Typography>
                  <Rating name="read-only" value={4} readOnly />
                </Stack>
                <span className="d-flex justify-content-between">
                  <Typography variant="subtitle1">
                    Price:${product.price}
                  </Typography>
                </span>
                <Stack spacing={3}>
                  <Typography variant="subtitle1">Color</Typography>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: "red" }}>R</Avatar>
                    <Avatar sx={{ bgcolor: "green" }}>G</Avatar>
                    <Avatar sx={{ bgcolor: "blue" }}>B</Avatar>
                    <Avatar sx={{ bgcolor: "yellow" }}>Y</Avatar>
                  </Stack>
                </Stack>
                <span className="d-flex">
                  <Button
                    variant="outlined"
                    className="flex-grow-1"
                    startIcon={<ShoppingCartCheckoutIcon />}
                  >
                    Buy
                  </Button>
                  <Button
                    variant="error"
                    className="flex-grow-3"
                    endIcon={<FavoriteIcon color="error" />}
                  >
                    fav
                  </Button>
                </span>
              </Box>
            </Box>

            <Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ p: 1 }}>Product Details</Typography>{" "}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{product.description}</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={{ display: "flex", gap: 3, flexDirection: "column" }}>
              <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                You may also like
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                <CustomProductCard products={similarProduct} />
              </Box>
            </Box>
          </Container>
        ) : (
          <h1>No products found</h1>
        )}
      </UserLayout>
    </div>
  );
};
