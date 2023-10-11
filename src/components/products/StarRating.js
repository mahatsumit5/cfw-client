import { Button, Divider, Rating, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const StarRating = () => {
  const { product } = useSelector((store) => store.singleProduct);
  const ratingArray = product.reviews.map((i) => i.rating);
  let totalStars = 0;
  let stars = 0;
  for (let i = 0; i < ratingArray.length; i++) {
    totalStars = totalStars + ratingArray[i];
  }
  stars = totalStars / ratingArray.length;
  return (
    <span style={{ display: "flex", gap: 5 }}>
      <Rating name="read-only" value={stars} readOnly />
      <Divider orientation="vertical" />
      <Typography color={"grey"}>{product.reviews.length} reviews</Typography>
    </span>
  );
};
