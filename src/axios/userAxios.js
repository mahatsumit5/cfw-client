import axios from "axios";
const rootApi = "http://localhost:8000";
const userApi = rootApi + `/api/v1/user`;
export const postUser = async (userData) => {
  try {
    const { data } = await axios.post(userApi, userData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const logInUser = async (loginDetails) => {
  try {
    const { data } = await axios.post(userApi + "/login", loginDetails);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getUser = async (_id) => {
  try {
    const { data } = await axios.get(userApi, _id);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
