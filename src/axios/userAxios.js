import axios from "axios";
const rootApi = process.env.REACT_APP_ROOTAPI;
const userApi = rootApi + "/user";
const getAccessJWt = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshToken,
}) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWt();
  const headers = {
    Authorization: isPrivate ? token : null,
  };
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
      error,
    };
  }
};

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
