import { Button, FormControl, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import { CustomModal } from "../modal/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/modalSlice";
import { postReviewActoin } from "../../action/reviewAction";

export const AddReview = ({ product }) => {
  const { user } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const handleOnReview = () => {
    dispatch(setModal({ isModalOpen: true, modalName: "review" }));
  };
  const [reviews, setReview] = useState({
    product,
    rating: 1,
    user,
    title: "",
    description: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...reviews, [name]: value });
  };
  function handleOnSubmit() {
    dispatch(postReviewActoin(reviews));
    // dispatch(setModal(false));
    // window.location.reload(true);
  }
  return (
    <>
      <Button
        sx={{ width: "100%" }}
        variant="outlined"
        onClick={handleOnReview}
      >
        Review
      </Button>
      <CustomModal>
        <FormControl>
          <Rating
            name="rating"
            value={reviews.rating}
            onChange={handleOnChange}
          />
          <TextField name="title" onChange={handleOnChange} />
          <TextField name="description" onChange={handleOnChange} />
          <Button variant="contained" onClick={handleOnSubmit}>
            Submit
          </Button>
        </FormControl>
      </CustomModal>
    </>
  );
};
