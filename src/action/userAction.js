import {
  getUser,
  logInUser,
  postUser,
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
  const { status, message, user } = await pending;
  toast[status](message);
  dispatch(setUser(user));

  return user;
};

export const getUserAction = async (_id) => {
  const { status, message, user } = await getUser(_id);
  return user;
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
