import { toast } from "react-toastify";
import {
  deleteReview,
  getProducts,
  postReview,
} from "../axios/categoryAndProductAxios";
import { setBackdrop } from "../redux/backdropLoader";
import { setProducts } from "../redux/productSlice";
import { setProduct } from "../redux/singleProductSlice";
import { m } from "framer-motion";

export const getProductsAction = () => async (dispatch) => {
  const { data } = await getProducts();
  if (data?.length) {
    dispatch(setProducts(data));
    // dispatch(setDisplayData(data));
  }
};
export const getSingleProduct = (obj) => async (dispatch) => {
  const pending = getProducts(obj);
  dispatch(setBackdrop(true));
  const { status, data } = await pending;
  dispatch(setBackdrop(false));
  if (status === "success") {
    dispatch(setProduct(data));
  }
};
export const postReviewAction = (obj) => async (dispatch) => {
  const pending = await postReview(obj);
  dispatch(setBackdrop(true));

  const { status, message } = pending;
  dispatch(setBackdrop(false));

  if (status === "success") {
    dispatch(getSingleProduct({ slug: obj.slug }));
  }
};
export const deleteReviewAction = (obj) => async (dispatch) => {
  const pending = await deleteReview(obj);
  dispatch(setBackdrop(true));
  const { status, message } = pending;
  toast[status](message);
  dispatch(setBackdrop(false));

  if (status === "success") {
    dispatch(getSingleProduct({ slug: obj.productSlug }));
  }
};
