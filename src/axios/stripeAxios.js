import { axiosProcessor, rootApi } from "../const";

const stripeApi = rootApi + "/stripe";

export const postPaymentIntent = async (object) => {
  const obj = {
    method: "post",
    url: stripeApi + "/payment-intent",
    obj: object,
  };
  return axiosProcessor(obj);
};

export const payWithCard = async (object) => {
  const obj = {
    method: "post",
    url: stripeApi + "/checkout-with-stripe",
    obj: object,
  };
  return axiosProcessor(obj);
};
