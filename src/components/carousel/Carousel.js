import { Carousel, CarouselItem } from "react-bootstrap";
import image1 from "../../assests/image.jpg";
import image2 from "../../assests/image2.jpg";
import image3 from "../../assests/image3.jpg";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";
import "swiper/css/effect-flip";
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
} from "swiper/modules";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CustomeCarousel = () => {
  const { products } = useSelector((state) => state.productInfo);

  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={"auto"}
      modules={[Pagination, EffectCoverflow, Autoplay]}
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
      spaceBetween={20}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product._id}>
          <Link to={`/product/${product.slug}`}>
            <div>
              {" "}
              <img
                src={product.thumbnail}
                height={300}
                width={"100%"}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
