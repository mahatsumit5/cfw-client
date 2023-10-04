import { postReview } from "../axios/reviewAxios";
export const getReviewAction = (obj) => async (dispatch) => {
  console.log(obj);
  const { status, result } = await postReview(obj);
};
export const postReviewActoin = (obj) => async (dispatch) => {
  console.log(obj);
  const { status, message } = await postReview(obj);
  if (status === "success") {
    dispatch(getReviewAction());
  }
};
