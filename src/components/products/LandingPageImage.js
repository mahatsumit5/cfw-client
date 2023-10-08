import { Box, Button, duration } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
export const LandingPageImage = ({ product }) => {
  const [currentImage, setCurrentImge] = useState({
    index: 0,
    thumbnail: product.images[0],
  });
  useEffect(() => {
    setCurrentImge({
      index: 0,
      thumbnail: product.thumbnail,
    });
  }, [product]);
  return (
    <Box sx={{ flexGrow: 2, gap: 2 }}>
      <Box
        sx={{
          width: { md: "50vw", xs: "85vw" },
          height: 450,

          display: "flex",
          justifyContent: "space-between",
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        style={{ position: "relative" }}
      >
        <Button
          style={{ zIndex: "1" }}
          onClick={() => {
            if (currentImage.index > 0) {
              setCurrentImge({
                index: currentImage.index - 1,
                thumbnail: product.images[currentImage.index - 1],
              });
            }
          }}
          disabled={currentImage.index === 0}
        >
          <ArrowBackIosIcon /> Prev
        </Button>
        <motion.img
          initial={{ x: "-20vh" }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          whileHover={{
            scale: 1.01,
            transition: { duration: "800ms" },
          }}
          src={currentImage.thumbnail}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            top: 0,
          }}
        />
        <Button
          onClick={() => {
            if (currentImage.index + 1 < product.images?.length) {
              setCurrentImge({
                index: currentImage.index + 1,
                thumbnail: product.images[currentImage.index + 1],
              });
            }
          }}
          disabled={currentImage.index + 1 === product.images?.length}
        >
          Next
          <ArrowForwardIosIcon />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "space-around",
        }}
      >
        <div>
          {product.images?.map((item, key) => (
            <img
              key={key}
              src={item}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
              alt="img"
              onClick={() => {
                setCurrentImge({
                  index: key,
                  thumbnail: item,
                });
              }}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};
