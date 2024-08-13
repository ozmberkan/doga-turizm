import React from "react";
import roadImg from "../assets/road.jpg";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Slider from "react-slick";

const Header = () => {
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
    <div className="relative h-[500px]">
      <div className="w-full flex flex-col absolute ">
        <Navbar />
        <Hero />
      </div>
      <Slider {...settings}>
        <div>
          <img src={roadImg} className=" w-full h-[500px] object-cover" />
        </div>
        <div>
          <img
            src="https://erepublic.brightspotcdn.com/dims4/default/2c7b2e9/2147483647/strip/true/crop/3979x2075+510+0/resize/840x438!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2F7d%2Ff8%2Faecc34e249c3ac44491898214f0c%2Fshutterstock-360752264.jpg"
            alt=""
            className=" w-full h-[500px] object-cover"
          />
        </div>
      </Slider>
      <div className="absolute inset-0 right-0 bg-gradient-to-r from-green-500/70 to-transparent "></div>
    </div>
  );
};

export default Header;
