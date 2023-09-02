import React from "react";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

export const SearchBar = () => {
  const { products } = useSelector((store) => store.productInfo);
  const { catagories } = useSelector((store) => store.catagoryInfo);
  const data = [...products, ...catagories];
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
              variant="standard"
              label="Search "
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </>
  );
};
