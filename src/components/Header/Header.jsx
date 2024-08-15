import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Slider from "react-slick";
import { images } from "../../data/data";

const Header = () => {
  const [open, setOpen] = useState(false);

  function SamplePrevArrow() {
    return <div style={{ display: "none", background: "green" }} />;
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 7000,
    cssEase: "linear",
    arrow: false,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative h-[750px] sm:h-[500px]">
      <div className="w-full flex flex-col absolute ">
        <Navbar open={open} setOpen={setOpen} />
        <Hero />
      </div>
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i}>
            <img
              src={image}
              className=" w-full h-[750px] sm:h-[500px] object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 right-0 bg-gradient-to-br sm:bg-gradient-to-r from-green-700 sm:from-green-500/70 to-transparent "></div>
    </div>
  );
};

export default Header;
