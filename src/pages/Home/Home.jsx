import React from "react";
import Hero from "../../components/Hero/Hero";
import Campaign from "../../components/Campaigns/Campaign";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { carouselImg } from "../../data/data";

const Home = () => {
  return (
    <div>
      <Hero carouselImg={carouselImg} />
      <Campaign />
      <Announcement />
      <Footer footerWidth={"w-2/3"} />
    </div>
  );
};

export default Home;
