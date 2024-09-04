import Hero from "../../components/Hero/Hero";
import Campaign from "../../components/Campaigns/Campaign";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { carouselImg } from "../../data/data";
import Features from "~/components/Features/Features";

const Home = () => {
  return (
    <div>
      <Hero carouselImg={carouselImg} />
      <Campaign />
      <Features />
      <Announcement />
      <Footer footerWidth={"w-2/3"} />
    </div>
  );
};

export default Home;
