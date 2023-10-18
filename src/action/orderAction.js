import { toast } from "react-toastify";
import { getOrderByUser, postOrder } from "../axios/orderAxios";
import { resetCart } from "../redux/cartSlice";
import { resetOrder } from "../redux/orderSlice";

export const postOrderAction = (object) => async (dispatch) => {
  const { status, message, orderNumber } = await postOrder(object);
  if (status === "success") {
    dispatch(resetCart());
    dispatch(resetOrder());
    localStorage.removeItem("clientSecret");
    return orderNumber;
  }
};

export const getOrderByUserAction = async (obj) => {
  const { status, message, result } = await getOrderByUser(obj);
  return result;
};
