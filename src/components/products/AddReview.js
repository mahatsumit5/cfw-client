import { Button, FormControl, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import { CustomModal } from "../modal/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/modalSlice";
import { getReviewAction, postReviewActoin } from "../../action/reviewAction";
import { useNavigate } from "react-router-dom";

export const AddReview = ({ slug, product }) => {
  const { user } = useSelector((store) => store.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnReview = () => {
    if (!user._id) {
      navigate("/signin");
      return;
    }
    dispatch(setModal({ isModalOpen: true, modalName: "review" }));
  };
  const [reviews, setReview] = useState({
    slug,
    rating: 1,
    user: user._id,
    title: "",
    description: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...reviews, [name]: value });
  };
  function handleOnSubmit() {
    dispatch(postReviewActoin(reviews));
    dispatch(setModal({ isModalOpen: false, modalName: "review" }));
    // window.location.reload(true);
    dispatch(getReviewAction({ slug }));
  }
  return (
    <>
      <Button fullWidth variant="contained" onClick={handleOnReview}>
        {user._id ? "Review" : "Login to review"}
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
