import { toast } from "react-toastify";
import { postOrder } from "../axios/orderAxios";
import { resetCart } from "../redux/cartSlice";
import { Navigate } from "react-router-dom";

export const postOrderAction = (object) => async (dispatch) => {
  const { status, message, orderNumber } = await postOrder(object);
  toast[status](message);
  if (status === "success") {
    dispatch(resetCart());
    return orderNumber;
  }
};
