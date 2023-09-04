import React from "react";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayData } from "../../redux/displayDataSlice";

export const SearchBar = () => {
  const { products } = useSelector((store) => store.productInfo);
  const dispatch = useDispatch();
  const data = [...products];
  function handleOnChange(e) {
    const { value } = e.target;

    const filteredItems = products.filter((item) =>
      item?.title.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setDisplayData(filteredItems));
  }
  return (
    <>
      <Stack spacing={1} sx={{}}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={data?.map((item) => item.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Search "
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              onChange={handleOnChange}
            />
          )}
        />
      </Stack>
    </>
  );
};
