import React from "react";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayData } from "../../redux/displayDataSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const SearchBar = () => {
  const { catagories } = useSelector((store) => store.catagoryInfo);
  const dispatch = useDispatch();
  const data = [...(catagories || [])];
  function handleOnChange(e) {
    const { value } = e.target;
    const filteredItems = catagories.filter((item) =>
      item?.title.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setDisplayData(filteredItems));
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        className="w-100"
      >
        <Stack spacing={1} sx={{ flexGrow: 1 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={data.map((item) => item.title)}
            renderInput={(params) => (
              <Link>
                <TextField
                  sx={{ height: "20px" }}
                  size="small"
                  {...params}
                  variant="outlined"
                  label="Search "
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  onChange={handleOnChange}
                />
              </Link>
            )}
          />
        </Stack>
      </motion.div>
    </>
  );
};
