import { getCatagories } from "../axios/categoryAndProductAxios";
import { setCatagories } from "../redux/catagorySlice";

export const getCatagoriesAction = () => async (dispatch) => {
  const { data } = await getCatagories();
  if (data?.length) {
    dispatch(setCatagories(data));
  }
};
