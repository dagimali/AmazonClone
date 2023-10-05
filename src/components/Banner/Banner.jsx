/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../CommonResources/Images/ImageFIles/71upF3u7n-L._SX3000_.jpg";
import Image2 from "../../CommonResources/Images/ImageFIles/61IpNyGmf+L._SX3000_.jpg";
import "./banner.css";

function Banner() {
  return (
    <>
      <div className="h-[20rem] w-full content-center">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          autoPlay
          autoPlaySpeed={500}
          infiniteLoop={true}
          interval={5000}
          mobileFirst={true}
          showThumbs={false}
          className="carousel"
        >
          <div className="h-[20rem] w-full">
            <img className=" banner" src={Image1} alt="banner1" />
          </div>
          <div className="h-[20rem] w-full">
            <img className=" banner" src={Image2} alt="banner2" />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Banner;
