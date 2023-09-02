import { axiosProcessor, getAccessJWt, getRefreshJWT, rootApi } from "../const";
const userApi = rootApi + "/user";

export const postUser = async (userData) => {
  const obj = {
    method: "post",
    url: userApi,
    obj: userData,
  };
  return axiosProcessor(obj);
};

export const logOutUser = async (_id) => {
  const obj = {
    method: "post",
    url: userApi + "/logout",
    obj: {
      _id,
      accessJWT: getAccessJWt(),
      refreshJWT: getRefreshJWT(),
    },
  };
  return axiosProcessor(obj);
};
export const logInUser = async (loginDetails) => {
  const obj = {
    method: "post",
    url: userApi + "/login",
    obj: loginDetails,
  };
  return axiosProcessor(obj);
};

export const getUser = async (_id) => {
  const obj = {
    method: "get",
    url: userApi,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const verifyAccount = async (object) => {
  const obj = {
    method: "put",
    url: userApi + "/verify",
    obj: object,
  };
  return axiosProcessor(obj);
};
