import { Box } from "@mui/material";
import { ProductLandingSwiper } from "../swiper/ProductLandingSwiper";
export const LandingPageImage = ({ product }) => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Box
        sx={{
          width: { md: "40vw", xs: "85vw" },
          height: 550,
          gap: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ProductLandingSwiper images={product.images} />
      </Box>
    </Box>
  );
};
