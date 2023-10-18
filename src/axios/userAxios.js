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

export const addToFav = async (object) => {
  const obj = {
    method: "POST",
    url: `${userApi}/addFav`,
    obj: object,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const getNewAccessJWt = async () => {
  const obj = {
    method: "get",
    url: userApi + "/get-accessjwt",
    isPrivate: true,
    refreshToken: true,
  };
  return axiosProcessor(obj);
};

export const getResetPassLink = async (email) => {
  const obj = {
    method: "post",
    url: userApi + "/get-reset-pass-link",
    obj: email,
  };
  return axiosProcessor(obj);
};
export const resetPassword = async ({ email, code, password }) => {
  console.log(email, code, password);
  const obj = {
    method: "put",
    url: userApi + `/reset-password/${email}/${code}`,
    obj: { password },
  };
  return axiosProcessor(obj);
};

export const updateUser = async (userData) => {
  const obj = {
    method: "put",
    url: userApi,
    obj: userData,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
