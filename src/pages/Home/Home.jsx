import React from "react";
import Header from "../../components/Hero/Hero";
import Starter from "../../components/Navbar/Starter/Starter";
import Campaign from "../../components/Campaigns/Campaign";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { carouselImg } from "../../data/data";

const Home = ({ setLoading }) => {
  return (
    <div>
      <Header carouselImg={carouselImg} setLoading={setLoading} />
      <Campaign />
      <Announcement />
      <Footer />
    </div>
  );
};

export default Home;
