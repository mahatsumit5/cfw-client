import { axiosProcessor, rootApi } from "../const";

const orderApi = rootApi + "/order";

export const postOrder = async (object) => {
  const obj = {
    method: "post",
    url: orderApi,
    obj: object,
  };
  return axiosProcessor(obj);
};

export const payWithCard = async (object) => {
  const obj = {
    method: "post",
    url: orderApi + "/checkout-with-stripe",
    obj: object,
  };
  return axiosProcessor(obj);
};
export const getOrder = async (_id) => {
  console.log(_id);
  const obj = {
    method: "get",
    url: orderApi + "/" + _id,
  };
  return axiosProcessor(obj);
};
