import React, { useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import { images } from "../../data/data";
import { Carousel } from "antd";


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-[750px] sm:h-[500px]">
      <div className="w-full flex flex-col absolute ">
        <Navbar open={open} setOpen={setOpen} />
        <Filter />
      </div>
      <Carousel autoplay dots={false} fade>
        {images.map((image, i) => (
          <div key={i}>
            <img
              src={image}
              className=" w-full h-[750px] sm:h-[500px] object-cover"
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute inset-0 right-0 bg-gradient-to-br sm:bg-gradient-to-l from-green-700 sm:from-green-500/70 to-transparent "></div>
    </div>
  );
};

export default Header;
