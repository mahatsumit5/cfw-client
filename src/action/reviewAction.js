import { postReview } from "../axios/reviewAxios";

export const postReviewActoin = (obj) => async (dispatch) => {
  console.log(obj);
  const { status, message } = await postReview(obj);
};
