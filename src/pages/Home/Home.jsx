import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Campaign from "../../components/Campaigns/Campaign";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { carouselImg } from "../../data/data";

const Home = ({ setLoading }) => {
  return (
    <div>
      <Hero carouselImg={carouselImg} setLoading={setLoading} />
      <Campaign />
      <Announcement />
      <Footer />
    </div>
  );
};

export default Home;
