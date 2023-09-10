import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const SideBar = () => {
  const { catagories } = useSelector((store) => store.catagoryInfo);

  return (
    <Box
      sx={{
        p: 2,
        width: 350,
        height: 700,
        overflowY: "auto",
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <Typography variant="h5" color="text.primary">
        Catagories
      </Typography>
      <Divider />
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
        }}
      >
        {catagories?.map((cat) => (
          <>
            <Button variant="text" size="large" key={cat._id}>
              <Link to={`items/${cat.slug}/${cat._id}`} className="nav-link">
                <ListItem>{cat.title}</ListItem>
              </Link>
            </Button>
            <Divider sx={{ border: "black" }} />
          </>
        ))}
      </List>
    </Box>
  );
};
