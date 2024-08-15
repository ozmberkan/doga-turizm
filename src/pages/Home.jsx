import React from "react";
import Header from "../components/Header/Header";
import Starter from "../components/Starter/Starter";
import Campaign from "../components/Campaigns/Campaign";
import Announcement from "../components/Announcement/Announcement";

const Home = () => {
  return (
    <div>
      <Starter />
      <Header />
      <Campaign />
      <Announcement />
    </div>
  );
};

export default Home;
