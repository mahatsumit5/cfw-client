import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { AddReview } from "./Review/AddReview";
import { ReviewDetails } from "./Review/ReviewDetails";

export const ReviewAccordian = () => {
  const { product } = useSelector((store) => store.singleProduct);
  const reviews = product.reviews;
  console.log(reviews);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="body" color="grey">
          Reviews
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {reviews.map((item, index) => (
          <ReviewDetails key={index} review={item} />
        ))}
        <AddReview slug={product.slug} product={product._id} />
      </AccordionDetails>
    </Accordion>
  );
};
