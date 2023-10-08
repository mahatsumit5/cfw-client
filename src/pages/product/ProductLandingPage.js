import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";

import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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

export const ProductLandingPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { product } = useSelector((store) => store.singleProduct);
  const [selectedItem, setSelectedItem] = useState({ ...product, orderQty: 1 });
  const handleOnQty = (e) => {
    const { value } = e.target;
    setSelectedItem({ ...product, orderQty: value });
  };
  useEffect(() => {
    dispatch(getSingleProduct({ slug: slug }));
  }, [slug]);
  useEffect(() => {
    setSelectedItem({ ...product, orderQty: 1 });
  }, [product]);
  let array = [];

  for (let i = 1; i <= 6; i++) {
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
                boxShadow: 1,
                borderRadius: 2,

                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <LandingPageImage product={product} key={product._id} />
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
                  <StarRating />
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
                  <Typography variant="subtitle1" color={"grey"}>
                    Qty
                  </Typography>
                  <Box
                    sx={{
                      minWidth: 80,
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">Qty</InputLabel>
                      <Select
                        size="small"
                        value={selectedItem.orderQty}
                        name="qty"
                        label="Qty"
                        onChange={handleOnQty}
                      >
                        {array.map((qty) => {
                          return <MenuItem value={qty}>{qty}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
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

            <YouMayLike />
          </Box>
        ) : (
          <h1>No products found</h1>
        )}
      </UserLayout>
    </div>
  );
};
