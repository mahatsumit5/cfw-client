import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export const CustomMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          maxWidth: { xs: 470, sm: 680 },
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
          <Tab label="NEW ITEM" />
          <Tab label="CLOTHING" />
          <Tab label="SHOES" />
          <Tab label="ACCESSORIES" />
          <Tab label="SPORTS" />
          <Tab label="BRANDS" />
          <Tab label="SALE" />
        </Tabs>
      </Box>
    </div>
  );
};
