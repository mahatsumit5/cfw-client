import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";

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
    <Box sx={{ flexGrow: 3 }}>
      <Box
        sx={{
          width: { md: "50vw", xs: "85vw" },
          height: 500,
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <img
          src={currentImage.thumbnail}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Button
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
          <ArrowBackIosIcon />
        </Button>
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
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};
