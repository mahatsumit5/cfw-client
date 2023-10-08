import { postOrder } from "../axios/orderAxios";
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
