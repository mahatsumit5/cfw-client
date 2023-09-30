import axios from "axios";
import { getNewAccessJWt } from "./axios/userAxios";
export const rootApi =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8010/api/v1"
    : `${process.env.REACT_APP_ROOTSERVER}/api/v1`;

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
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message ===
        "Your token has expired. Please login Again"
    ) {
      const { status, accessJWT, message } = await getNewAccessJWt();
      if (status === "success") {
        sessionStorage.setItem("accessJWT", accessJWT);
        return axiosProcessor({ method, url, obj, isPrivate, refreshToken });
      }
      if (message === "jwt expired") {
        console.log("refresh jwt expired");
        // sessionStorage.removeItem("accessJWT");
        // localStorage.removeItem("refreshJWT");
        // await logOutUser();
      }
    }
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
      error,
    };
  }
};
