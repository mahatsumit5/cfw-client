import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";

import {
  Backdrop,
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import { AddToCart } from "../../components/products/AddToCart";
import { AddToFav } from "../../components/products/AddToFav";
import { YouMayLike } from "../../components/products/YouMayLike";
import { LandingPageImage } from "../../components/products/LandingPageImage";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../action/productAction";
import { StarRating } from "../../components/products/StarRating";
import { Spinner } from "react-bootstrap";
import { ReviewAccordian } from "../../components/products/ReviewAccordian";

export const ProductLandingPage = () => {
  const dispatch = useDispatch();
  const { productSlug } = useParams();
  const { product } = useSelector((store) => store.singleProduct);
  const [selectedItem, setSelectedItem] = useState({
    ...product,
    orderQty: 1,
    size: "sm",
  });
  // handle item to cart quantity
  const handleOnQty = (e) => {
    const { value } = e.target;
    setSelectedItem({ ...product, orderQty: value });
  };
  // handle selected size
  // const handleOnSize = (e) => {
  //   const { value } = e.target;
  //   setSelectedItem({ ...selectedItem, size: value });
  // };
  useEffect(() => {
    dispatch(getSingleProduct({ slug: productSlug }));
  }, [productSlug]);
  useEffect(() => {
    setSelectedItem({ ...product, orderQty: 1 });
  }, [product]);
  let array = [];

  for (let i = 1; i <= 10; i++) {
    array.push(i);
  }

  return (
    <div>
      <UserLayout>
        {product?._id ? (
          <Box
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
                // boxShadow: 1,
                borderRadius: 2,

                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <LandingPageImage product={product} key={product._id} />
              <Box
                sx={{
                  gap: 2,
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 2,
                }}
              >
                <Stack direction="column" gap={1}>
                  <Typography variant="h4">
                    {product.title.toUpperCase()}
                  </Typography>
                  <StarRating />
                </Stack>
                <span className="d-flex justify-content-between flex-column gap-2">
                  <Typography
                    sx={{ textAlign: "justify" }}
                    variant="subtitle2"
                    color={"grey"}
                  >
                    Description
                  </Typography>
                  <Typography sx={{ textAlign: "justify" }} variant="info">
                    {product.description}
                  </Typography>
                </span>

                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography variant="subtitle2" color={"grey"}>
                      Color
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      {product.color.map((color) => (
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            backgroundColor: `${color}`,
                          }}
                        />
                      ))}
                    </Stack>
                  </div>
                  <Typography variant="subtitle2" color={"grey"}>
                    Price:${product.price}
                  </Typography>
                </span>

                <Stack direction="row" spacing={1}>
                  <Box
                    sx={{
                      minWidth: 100,
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControl fullWidth size="medium" variant="filled">
                      <InputLabel>Quantity</InputLabel>
                      <Select
                        size="small"
                        value={selectedItem.orderQty}
                        name="qty"
                        onChange={handleOnQty}
                      >
                        {array.map((qty) => {
                          return <MenuItem value={qty}>{qty}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </Box>

                  <Box
                    sx={{
                      minWidth: 100,
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControl fullWidth size="medium" variant="filled">
                      <InputLabel>Size</InputLabel>
                      <Select
                        size="small"
                        value={selectedItem.size}
                        name="size"
                        // onChange={handleOnSize}
                      >
                        {product.size.map((size) => {
                          return <MenuItem value={size}>{size}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </Stack>
                <span className="d-flex gap-2">
                  <div className="d-flex">
                    <AddToCart item={selectedItem} />
                    <AddToFav item={product} />
                  </div>
                </span>
                <ReviewAccordian />
              </Box>
            </Box>

            <YouMayLike />
          </Box>
        ) : (
          <Backdrop open={true}></Backdrop>
        )}
      </UserLayout>
    </div>
  );
};
