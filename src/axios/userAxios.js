import axios from "axios";
const rootApi = process.env.REACT_APP_ROOTAPI;
const userApi = rootApi + "/user";

const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
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
    url: userApi + "/login",
    obj: _id,
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
