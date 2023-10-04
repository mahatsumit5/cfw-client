import { axiosProcessor, rootApi } from "../const";
const reviewApi = rootApi + "/review";

export const postReview = async (object) => {
  console.log(object);
  const obj = {
    method: "post",
    url: reviewApi,
    obj: object,
  };
  return axiosProcessor(obj);
};

export const getReviews = async (object) => {
  console.log(object);
  const obj = {
    method: "get",
    url: reviewApi,
    obj: object,
  };
  return axiosProcessor(obj);
};
