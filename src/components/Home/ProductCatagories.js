import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const ProductCatagories = () => {
  const { displayData } = useSelector((store) => store.display);

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
        {displayData?.map((cat) => (
          <Link to={`/${cat.slug}`} key={cat._id} className="nav-link">
            <Paper
              elevation={0}
              sx={{ height: { xs: 120, sm: 200 }, width: { xs: 120, sm: 200 } }}
            >
              <Box
                sx={{
                  height: { xs: 120, sm: 200 },
                  width: { xs: 120, sm: 200 },
                  overflow: "hidden",
                }}
                className="catagory-image-box"
              >
                <motion.img
                  className="catagory-image"
                  src={cat.image}
                  alt={cat}
                  height="100%"
                  width="100%"
                  whileHover={{ scale: 1.2 }}
                />
              </Box>
              <Typography variant="overline" mt={1}>
                {cat.title}
              </Typography>
            </Paper>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
