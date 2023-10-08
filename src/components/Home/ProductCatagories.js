import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import pants from "../../assests/pants.avif";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductCatagories = () => {
  const { catagories } = useSelector((store) => store.catagoryInfo);

  return (
    <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h5">Shop by Catagories</Typography>

      <Box
        sx={{
          display: "flex",
          gap: 5,
          margin: 2,
          flexWrap: "wrap",

          justifyContent: { xs: "space-between", sm: "space-between" },
        }}
      >
        {catagories?.map((cat) => (
          <Link
            to={`items/${cat.slug}/${cat._id}`}
            key={cat._id}
            className="nav-link"
          >
            <Paper
              elevation={0}
              sx={{ height: { xs: 120, sm: 300 }, width: { xs: 120, sm: 300 } }}
            >
              <Box
                sx={{
                  height: { xs: 120, sm: 300 },
                  width: { xs: 120, sm: 300 },
                }}
                className="catagory-image-box"
              >
                <img
                  className="catagory-image"
                  src={cat.image}
                  alt={cat}
                  height="100%"
                  width="100%"
                />
              </Box>
              <Typography variant="h6">{cat.title}</Typography>
            </Paper>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
