import { toast } from "react-toastify";
import { subscribe } from "../axios/subscribeAxios";

export const subscribeAction = async (email) => {
  const { status, message } = await subscribe(email);
  toast[status](message);
};
