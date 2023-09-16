import axios from "axios";
export const rootApi = process.env.REACT_APP_ROOTAPI;
export const getAccessJWt = () => {
  return sessionStorage.getItem("accessJWT");
};
export const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
export const axiosProcessor = async ({
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
    if (error.message === "Your token has expired. Please login Again") {
      console.log("log in first");
    }
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
      error,
    };
  }
};
