import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";

export const LandingPageImage = ({ product }) => {
  const [currentImage, setCurrentImge] = useState({
    index: 0,
    thumnail: process.env.REACT_APP_ROOTSERVER + product?.images[0]?.slice(6),
  });
  useEffect(() => {
    setCurrentImge({
      index: 0,
      thumnail: process.env.REACT_APP_ROOTSERVER + product?.images[0]?.slice(6),
    });
  }, [product]);
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Box
        sx={{
          // border: 1,
          width: "100%",
          height: 400,
          // backgroundColor: "primary.dark",
          "&:hover": {
            // backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <img
          src={currentImage.thumnail}
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
                thumnail:
                  process.env.REACT_APP_ROOTSERVER +
                  product.images[currentImage.index - 1].slice(6),
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
              src={process.env.REACT_APP_ROOTSERVER + "/" + item.slice(6)}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
              alt="img"
              onClick={() => {
                setCurrentImge({
                  index: key,
                  thumnail: process.env.REACT_APP_ROOTSERVER + item.slice(6),
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
                thumnail:
                  process.env.REACT_APP_ROOTSERVER +
                  product.images[currentImage.index + 1]?.slice(6),
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
