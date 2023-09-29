import { toast } from "react-toastify";
import { getProducts, postReview } from "../axios/categoryAndProductAxios";
import { setDisplayData } from "../redux/displayDataSlice";
import { setProducts } from "../redux/productSlice";

export const getProductsAction = () => async (dispatch) => {
  const { data } = await getProducts();
  if (data?.length) {
    dispatch(setProducts(data));
    // dispatch(setDisplayData(data));
  }
};
export const postReviewActoin = (slug, obj) => async (dispatch) => {
  console.log(obj);
  const { status, message } = await postReview(slug, obj);
  // toast[status](message);
  if (status === "success") {
    dispatch(getProductsAction(slug, obj));
  }
};
