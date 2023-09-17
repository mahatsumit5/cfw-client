import { axiosProcessor, rootApi } from "../const";

const paymentApi = rootApi + "/payment";

export const getAllPaymentMethods = async () => {
  const obj = {
    method: "get",
    url: paymentApi,
  };
  return axiosProcessor(obj);
};
