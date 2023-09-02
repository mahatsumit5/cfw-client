import { axiosProcessor, rootApi } from "../const";

const catApi = rootApi + "/catagory";
const productApi = rootApi + "/product";
export const getCatagories = async () => {
  const obj = {
    method: "get",
    url: catApi,
  };
  return axiosProcessor(obj);
};

export const getProducts = async (_id) => {
  const obj = {
    method: "get",
    url: _id ? productApi + `/${_id}` : productApi,
  };
  return axiosProcessor(obj);
};
