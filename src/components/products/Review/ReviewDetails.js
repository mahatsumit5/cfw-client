import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewAction } from "../../../action/productAction";
import { useParams } from "react-router-dom";
export const ReviewDetails = ({ review }) => {
  const { title, description, user, rating } = review;
  const { _id } = useSelector((store) => store.userInfo.user);
  const { productSlug } = useParams();
  const dispatch = useDispatch();
  const handleOnDelete = (obj) => {
    dispatch(deleteReviewAction({ ...obj, productSlug }));
  };
  return (
    <Box mt={2}>
      <div className="d-flex justify-content-between">
        <Typography variant="subtitle1">{title}</Typography>
        <Rating name="read-only" value={rating} readOnly />
      </div>
      <div className="d-flex justify-content-between mt-2 ">
        <Typography variant="body2" color={"grey"}>
          {description}
        </Typography>
        <span>
          <Button size="small" variant="text">
            <EditIcon />
          </Button>
          {_id === user && (
            <Button
              size="small"
              variant="text"
              color="error"
              onClick={() => {
                handleOnDelete({ _id: review._id });
              }}
            >
              <DeleteIcon />
            </Button>
          )}
        </span>
      </div>
    </Box>
  );
};
