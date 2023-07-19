import { getUser, logInUser, postUser } from "../axios/userAxios";
import { toast } from "react-toastify";
import { setUser } from "../redux/userSlice";

export const postUserAction = async (userData) => {
  const { status, message } = await postUser(userData);
  toast[status](message);
};

export const loginAction = (loginDetails) => async (dispatch) => {
  const { status, message, user } = await logInUser(loginDetails);
  toast[status](message);
  dispatch(setUser(user));
  return user;
};

export const getUserAction = async (_id) => {
  const { status, message, user } = await getUser(_id);
  return user;
};
