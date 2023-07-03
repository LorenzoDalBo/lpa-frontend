import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import BannerItem from "./bannerItem";

const Banner = () => {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }

  return (
    <main className="flex bg-gray2 justify-center p-2 h-[270px] w-screen">
      <Carousel className="border-t-2 border-solid w-[630px]" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
           className="d-block w-screen"
            src="images/bannerSatc.jpeg"
            alt="First slide"
          
          />
        </Carousel.Item>

      <Carousel.Item>
          <img
            className="d-block w-screen"
            src="images/bannerSatc.jpeg"
            alt="First slide"
          
          />
        </Carousel.Item>

        <Carousel.Item>
         <img
          className="d-block w-screen"
          src="images/bannerSatc.jpeg"
          alt="First slide"
          
          />
        </Carousel.Item>
      </Carousel>
    </main>
  );
};

export default Banner;
