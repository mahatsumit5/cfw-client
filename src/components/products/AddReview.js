import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { CustomModal } from "../modal/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/modalSlice";
import { postReviewActoin } from "../../action/productAction";

export const AddReview = ({ slug }) => {
  const { user } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const handleOnReview = () => {
    dispatch(setModal({ isModalOpen: true, modalName: "review" }));
  };
  const [reviews, setReview] = useState({
    user: user._id,
    title: "",
    description: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...reviews, [name]: value });
  };
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
          <TextField name="title" onChange={handleOnChange} />
          <TextField name="description" onChange={handleOnChange} />
          <Button
            variant="contained"
            onClick={() => dispatch(postReviewActoin(slug, reviews))}
          >
            Submit
          </Button>
        </FormControl>
      </CustomModal>
    </>
  );
};
