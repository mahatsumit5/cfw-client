import { Carousel, CarouselItem } from "react-bootstrap";
import image1 from "../../assests/image.jpg";
import image2 from "../../assests/image2.jpg";
import image3 from "../../assests/image3.jpg";
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

import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CustomeCarousel = () => {
  const { products } = useSelector((state) => state.productInfo);

  return (
    <Swiper modules={[Navigation]} navigation={true}>
      <SwiperSlide>
        <img src={image1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} />
      </SwiperSlide>
    </Swiper>
  );
};
