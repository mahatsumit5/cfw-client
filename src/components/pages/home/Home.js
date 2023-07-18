import React from "react";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { CustomeCarousel } from "../../carousel/Carousel";
import image1 from "../../../assests/image.jpg";
import image2 from "../../../assests/image2.jpg";
import image3 from "../../../assests/image3.jpg";
export const Home = () => {
  const pictures = [
    {
      src: image1,
      alt: "first picture",
      heading: "no 1",
    },
    {
      src: image2,
      alt: "second picture",
      heading: "no 2",
    },
    {
      src: image3,
      alt: "third pi3cture",
      heading: "no 3",
    },
  ];
  return (
    <div>
      <div className="landingPage">
        <Header />
        <CustomeCarousel />

        <main className="main "></main>
      </div>
      <Footer />
    </div>
  );
};
