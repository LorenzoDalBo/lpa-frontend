import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import BannerItem from "./bannerItem";

const Banner = () => {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }

  return (
    <Carousel className="border-t-2 border-solid border-blue-600" style={{ width: "30vw"}} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bannerSatc.jpeg"
          alt="First slide"
          style={{maxHeight: '200%', height: "200px", maxWidth: '200%', objectFit: 'cover'}}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/hometest.jpg"
          alt="First slide"
          style={{ maxHeight: '200%', height: "200px", maxWidth: '200%', objectFit: 'cover' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/hometest3.png"
          alt="First slide"
          style={{ maxHeight: '100%', height: "200px", maxWidth: '100%', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
