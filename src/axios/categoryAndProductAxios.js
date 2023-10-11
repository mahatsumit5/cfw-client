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

export const getProducts = async (object) => {
  const obj = {
    method: "get",
    url: !object ? productApi : productApi + `/${object?.slug}`,
  };
  return axiosProcessor(obj);
};
export const getProductsByCat = async (object) => {
  const obj = {
    method: "get",
    url: productApi + `/catagories` + `/${object.slug}`,
  };
  return axiosProcessor(obj);
};
export const postReview = async (object) => {
  const obj = {
    method: "put",
    url: `${productApi}/post-review`,
    obj: object,
  };
  return axiosProcessor(obj);
};
export const deleteReview = async (object) => {
  const obj = {
    method: "put",
    url: `${productApi}/delete-review`,
    obj: object,
  };
  return axiosProcessor(obj);
};
