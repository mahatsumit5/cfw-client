import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import pants from "../../assests/pants.avif";
import jacket from "../../assests/jacket.avif";
import sweater from "../../assests/sweater.jpg";
import { Link } from "react-router-dom";
import { Carousel, CarouselItem } from "react-bootstrap";
import image1 from "../../assests/image.jpg";
import image2 from "../../assests/image2.jpg";
import image3 from "../../assests/image3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/controller";
import "swiper/css/free-mode";
import "swiper/css/parallax";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  EffectCards,
  EffectCube,
  Autoplay,
  EffectCreative,
  EffectFlip,
  Controller,
  FreeMode,
  Parallax,
  EffectFade,
  Scrollbar,
} from "swiper/modules";
import { useSelector } from "react-redux";
export const Hero = () => {
  return (
    <div className="">
      <Swiper
        modules={[Pagination, Autoplay]}
        effect={"fade"}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <Paper
            elevation={1}
            sx={{
              height: 250,
              width: 200,
              display: "flex",
              flexWrap: "nowrap",

              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4">Just Landed</Typography>
            <Typography variant="caption">
              Be the first to shop our latest products
            </Typography>
            <Link to="/" className="nav-link">
              Shop the latest
            </Link>{" "}
          </Paper>
        </SwiperSlide>
        <SwiperSlide>
          <Paper sx={{ height: 250, width: 200 }}>
            <img
              loading="lazy"
              className="image"
              src={pants}
              alt=""
              height={250}
              width={200}
              style={{ objectFit: "cover" }}
            />
          </Paper>
        </SwiperSlide>
        <SwiperSlide>
          <Paper sx={{ height: 250, width: 200 }}>
            <img
              loading="lazy"
              className="image"
              src={jacket}
              alt=""
              height={250}
              width={200}
            />
          </Paper>
        </SwiperSlide>

        <SwiperSlide>
          <Paper sx={{ height: 250, width: 200 }}>
            <img
              loading="lazy"
              className="image"
              src={sweater}
              alt=""
              height={250}
              width={200}
            />
          </Paper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
