import { getAllPaymentMethods } from "../axios/paymentAxios";
import { setPaymentMethods } from "../redux/paymentSlice";

export const getPaymentMethodAction = () => async (dispatch) => {
  const { status, result } = await getAllPaymentMethods();
  if (status === "success") {
    dispatch(setPaymentMethods(result));
  }
};
