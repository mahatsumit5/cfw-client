import {
  Button,
  FormControl,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CustomModal } from "../modal/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/modalSlice";
import { useNavigate } from "react-router-dom";
import { postReviewAction } from "../../action/productAction";
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
    dispatch(postReviewAction(reviews));
    dispatch(setModal({ isModalOpen: false, modalName: "review" }));
  }
  return (
    <>
      <Button variant="text" onClick={handleOnReview}>
        {user._id ? "Write a review" : "Login to review"}
      </Button>
      <CustomModal title={"Provide us a feedback"}>
        <FormControl sx={{ gap: 2 }}>
          <Rating
            name="rating"
            value={reviews.rating}
            onChange={handleOnChange}
          />
          <TextField name="title" label="Title" onChange={handleOnChange} />
          <TextField
            name="description"
            label="Description"
            onChange={handleOnChange}
          />
          <Button
            variant="contained"
            onClick={handleOnSubmit}
            disabled={reviews.title === "" || reviews.description === ""}
          >
            Submit
          </Button>
        </FormControl>
      </CustomModal>
    </>
  );
};
