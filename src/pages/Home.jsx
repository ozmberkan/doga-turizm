import React from "react";
import Header from "../components/Header/Header";
import Starter from "../components/Starter/Starter";
import Campaign from "../components/Campaigns/Campaign";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Starter />
      <Header />
      <Campaign />
      <Announcement />
      <Footer />
    </div>
  );
};

export default Home;
