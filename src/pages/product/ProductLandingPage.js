import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCat,
} from "../../axios/categoryAndProductAxios";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import { AddToCart } from "../../components/products/AddToCart";
import { AddToFav } from "../../components/products/AddToFav";
import { YouMayLike } from "../../components/products/YouMayLike";
import { LandingPageImage } from "../../components/products/LandingPageImage";
import { CustomBackDrop } from "../../components/backDrop/BackDrop";
import { AddReview } from "../../components/products/AddReview";

export const ProductLandingPage = () => {
  const { slug } = useParams();
  const [product, setproduct] = useState({});
  const [reviews, setReview] = useState([]);
  const [similarProduct, setSimilarproduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [orderQty, setOrderQty] = useState(1);
  const [selectedItem, setSelectedItem] = useState({ ...product, orderQty });
  const handleOnQty = (e) => {
    const { value } = e.target;
    setOrderQty(value);
  };
  useEffect(() => {
    async function getdata() {
      const pendingResult = getProducts({ slug });
      setOpen(true);
      const { data } = await pendingResult;
      setSelectedItem({ ...data, orderQty });

      setproduct(data);
      setReview(data.reviews);
      const obj = {
        _id: data?.parentCat,
        slug: data.slug,
      };
      const { result } = data?._id && (await getProductsByCat(obj));
      if (result) {
        setSimilarproduct(result);
        // location.reload();
      }
      setOpen(false);
    }
    getdata();
  }, [slug]);
  useEffect(() => {
    setSelectedItem({ ...product, orderQty });
  }, [orderQty]);
  let numberOfStars = 0;
  reviews?.map((item) => {
    console.log(item);
    return (numberOfStars += item?.rating / 5);
  });

  console.log(numberOfStars);
  return (
    <div>
      <UserLayout>
        <CustomBackDrop open={open} />
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
              <LandingPageImage product={product} />
              <Box
                sx={{
                  gap: 5,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack direction="column" gap={1}>
                  <Typography variant="h4">
                    {product.title.toUpperCase()}
                  </Typography>
                  <span style={{ display: "flex", gap: 5 }}>
                    <Rating name="read-only" value={numberOfStars} readOnly />
                    <Typography variant="subtitle1" color={"grey"}>
                      {product.reviews?.length} reviews
                    </Typography>
                  </span>
                </Stack>
                <span className="d-flex justify-content-between">
                  <Typography sx={{ textAlign: "justify" }}>
                    {product.description}
                  </Typography>
                </span>
                <span style={{ display: "flex", gap: "20px" }}>
                  <Typography variant="subtitle1" color={"grey"}>
                    Color
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "red",
                      }}
                    />
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "Green",
                      }}
                    />
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "blue",
                      }}
                    />
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "black",
                      }}
                    />
                  </Stack>
                </span>
                <Stack direction="row" spacing={1}>
                  {/* <Typography variant="subtitle1" color={"grey"}>
                    Size
                  </Typography>
                  <Box sx={{ minWidth: 80 }}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Size
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="size"
                        value={size}
                        label="Size"
                        onChange={() => {}}
                      >
                        <MenuItem value={"sm"}>SM</MenuItem>
                        <MenuItem value={"md"}>MD</MenuItem>
                        <MenuItem value={"lg"}>LG</MenuItem>
                        <MenuItem value={"xl"}>XL</MenuItem>
                      </Select>
                    </FormControl>
                  </Box> */}
                  <Typography variant="subtitle1" color={"grey"}>
                    Qty
                  </Typography>
                  <Box sx={{ minWidth: 80, display: "flex", gap: 2 }}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">Qty</InputLabel>
                      <Select
                        value={orderQty}
                        name="qty"
                        label="Qty"
                        onChange={handleOnQty}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                    <AddReview slug={slug} product={product._id} />
                  </Box>
                </Stack>
                <span className="d-flex gap-2">
                  <Typography variant="h6">${product.price}</Typography>
                  <div className="d-flex">
                    <AddToCart item={selectedItem} />
                    <AddToFav item={product} />
                  </div>
                </span>
              </Box>
            </Box>

            {/* <Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ p: 1, textAlign: "center" }}>
                    Product Details
                  </Typography>{" "}
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </Box> */}
            <YouMayLike similarProduct={similarProduct} />
          </Container>
        ) : (
          <h1>No products found</h1>
        )}
      </UserLayout>
    </div>
  );
};
