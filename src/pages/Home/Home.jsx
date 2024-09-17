import Hero from "../../components/Hero/Hero";
import Campaign from "../../components/Campaigns/Campaign";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Features from "~/components/Features/Features";
import { carouselImg } from "../../data/data";
import { useEffect, useState } from "react";
import DiscountModal from "~/components/UI/Modals/DiscountModal";
import { useSelector } from "react-redux";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-y-12">
        <Hero carouselImg={carouselImg} />
        <Campaign />
        <Features />
        <Announcement />
        <Footer footerWidth={"w-2/3"} />
      </div>
      {user?.hasBeenLogin === false && (
        <DiscountModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Home;
