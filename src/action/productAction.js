import { toast } from "react-toastify";
import { getProducts, postReview } from "../axios/categoryAndProductAxios";
import { setProducts } from "../redux/productSlice";

export const getProductsAction = () => async (dispatch) => {
  const { data } = await getProducts();
  if (data?.length) {
    dispatch(setProducts(data));
    // dispatch(setDisplayData(data));
  }
};
