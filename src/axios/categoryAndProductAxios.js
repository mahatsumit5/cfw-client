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
    url: productApi + `/catagories` + `/${object?.slug}`,
  };
  return axiosProcessor(obj);
};

export const postReview = async (slug, object) => {
  console.log(slug, object);
  const obj = {
    method: "put",
    url: `${productApi}/${slug}/post-review`,
    obj: object,
  };
  return axiosProcessor(obj);
};
