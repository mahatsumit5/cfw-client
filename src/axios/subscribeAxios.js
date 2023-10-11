import { axiosProcessor, rootApi } from "../const";
const subscribeApi = rootApi + "/subscribe";

export const subscribe = async (email) => {
  const obj = {
    method: "post",
    url: subscribeApi,
    obj: email,
  };
  return axiosProcessor(obj);
};
