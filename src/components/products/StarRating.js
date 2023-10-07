import { Button, Rating, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { AddReview } from "./AddReview";

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
      <Typography variant="subtitle1" color={"grey"}>
        <Button variant="text">Read review</Button>
      </Typography>
      <Typography variant="subtitle1" color={"grey"}>
        <AddReview slug={product.slug} product={product._id} />
      </Typography>
    </span>
  );
};
