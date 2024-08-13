import React from "react";
import roadImg from "../assets/road.jpg";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center w-full flex justify-center "
      style={{ backgroundImage: `url(${roadImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/70 to-transparent "></div>
      <div className="w-full flex flex-col relative ">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Header;
