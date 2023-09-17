import { axiosProcessor, rootApi } from "../const";

const orderApi = rootApi + "/order";

export const postOrder = async (object) => {
  console.log(object);
  const obj = {
    method: "post",
    url: orderApi,
    obj: object,
  };
  return axiosProcessor(obj);
};
