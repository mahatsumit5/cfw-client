import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
export const CustomMenu = () => {
  const [value, setValue] = useState(0);
  const { catagories } = useSelector((store) => store.catagoryInfo);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          maxWidth: { xs: 470, sm: 580 },
          md: "1000",
          bgcolor: "background.paper",
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
            <Tab key={cat._id} label={cat.title} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};
