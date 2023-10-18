import {
  addToFav,
  getUser,
  logInUser,
  postUser,
  updateUser,
  verifyAccount,
} from "../axios/userAxios";
import { toast } from "react-toastify";
import { setUser } from "../redux/userSlice";

export const postUserAction = async (userData) => {
  const pending = postUser(userData);
  toast.promise(pending, { pending: "Please Wait" });
  const { status, message } = await pending;

  toast[status](message);
  if (status === "success") {
    return true;
  }
};

export const loginAction = (loginDetails) => async (dispatch) => {
  const pending = logInUser(loginDetails);
  const { status, message, token } = await pending;
  if (status === "success") {
    localStorage.setItem("refreshJWT", token.refreshJWT);
    sessionStorage.setItem("accessJWT", token.accessJWT);
    dispatch(getUserAction());
  }
  return true;
};

export const getUserAction = () => async (dispatch) => {
  const { status, user } = await getUser();
  if (status === "success") {
    dispatch(setUser(user));
  }
};

export const verifyAccountAction = async (obj) => {
  const pending = verifyAccount(obj);
  toast.promise(pending, { pending: "Please Wait" });
  const { status, message } = await pending;
  toast[status](message);
  if (status === "success") {
    return true;
  }
};

export const addTofavAction = (obj) => async (dispatch) => {
  const result = await addToFav(obj);
  if (result.status === "success") {
    dispatch(getUserAction());
  }
  return result;
};
export const updateUserAction = (obj) => async (dispatch) => {
  const { status, message } = await updateUser(obj);
  if (status === "success") {
    dispatch(getUserAction());
  }
};
