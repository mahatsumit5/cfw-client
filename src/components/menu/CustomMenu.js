import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const CustomMenu = () => {
  const [value, setValue] = useState(0);
  const { catagories } = useSelector((store) => store.catagoryInfo);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {catagories?.length ? (
        <Box
          sx={{
            maxWidth: { xs: 470, sm: 680 },
            md: "1000",
            bgcolor: "background.paper",
            display: { md: "none" },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {catagories?.map((cat) => (
              <Link to={`items/${cat.slug}`} key={cat._id}>
                <Tab key={cat._id + 1} label={cat.title} />
              </Link>
            ))}
          </Tabs>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
