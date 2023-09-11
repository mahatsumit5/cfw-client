import { getCatagories } from "../axios/categoryAndProductAxios";
import { setCatagories } from "../redux/catagorySlice";
import { setCatalogue } from "../redux/mainCatalogueSlice";

export const getCatagoriesAction = () => async (dispatch) => {
  const { data, result } = await getCatagories();
  if (data?.length) {
    dispatch(setCatagories(data));
  }
  if (result?.length) {
    dispatch(setCatalogue(result));
  }
};
