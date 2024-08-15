import React from "react";
import Header from "../components/Header/Header";
import Starter from "../components/Starter/Starter";
import Campaign from "../components/Campaigns/Campaign";

const Home = () => {
  return (
    <div>
      <Starter />
      <Header />
      <Campaign />
    </div>
  );
};

export default Home;
