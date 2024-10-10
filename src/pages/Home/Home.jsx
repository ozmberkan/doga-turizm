import Hero from "~/components/Home/Hero/Hero";
import Campaign from "~/components/Home/Campaigns/Campaign";
import Announcement from "~/components/Home/Announcement/Announcement";
import Footer from "~/components/Footer/Footer";
import Features from "~/components/Home/Features/Features";
import { carouselImg } from "~/data/data";
import { useEffect, useState } from "react";
import DiscountModal from "~/components/UI/Modals/DiscountModal";
import { useSelector } from "react-redux";
import Cities from "~/components/Home/Cities/Cities";

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
        <Cities />
        <Announcement />
        <Footer />
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
