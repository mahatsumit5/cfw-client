import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-flip";
import "swiper/css/effect-creative";
import "./styles.css";

// import required modules
import {
  Autoplay,
  EffectCards,
  EffectCreative,
  EffectFlip,
  FreeMode,
  Keyboard,
  Navigation,
  Pagination,
  Thumbs,
  Zoom,
} from "swiper/modules";

export const ProductLandingSwiper = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#bbf",
          "--swiper-pagination-color": "#bbb",
        }}
        zoom={true}
        loop={true}
        spaceBetween={10}
        navigation={true}
        swiper={{ thumbsSwiper }}
        thumbs={{ Swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Zoom, Keyboard]}
        enabled={true}
        keyboard={{ enabled: true }}
        className="mySwiper2"
      >
        {images?.map((i) => {
          return (
            <SwiperSlide key={i}>
              <img src={i} style={{ objectFit: "contain" }} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        autoplay={{ delay: 1500 }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={3}
        freeMode={true}
        pagination={{ clickable: "true" }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
        className="mySwiper"
      >
        {images?.map((i) => {
          return (
            <SwiperSlide key={i}>
              <img src={i} style={{ objectFit: "contain" }} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
