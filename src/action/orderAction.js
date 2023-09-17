import { toast } from "react-toastify";
import { postOrder } from "../axios/orderAxios";

export const postOrderAction = (object) => async (dispatch) => {
  const { status, message } = await postOrder(object);
  toast[status](message);
  if (status === "success") {
    return true;
  }
};
