import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import { Carousel } from "antd";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebaseConfig";
import Loading from "../Loader/Loading";

const Header = ({ carouselImg }) => {
  const [sliderImg, setSliderImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = await Promise.all(
          carouselImg.map(async (item) => {
            const storageRef = ref(storage, `carousel/${item.imagePath}`);
            const url = await getDownloadURL(storageRef);
            return url;
          })
        );
        setSliderImg(imageUrls);
        setLoading(false);
      } catch (error) {
        console.log("Fetch Problemi:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [carouselImg]);

  return (
    <div className="relative h-[750px] sm:h-[500px]">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loading />
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col absolute ">
            <Navbar open={open} setOpen={setOpen} />
            <Filter />
          </div>
          <Carousel autoplay dots={false} fade>
            {sliderImg.map((image, i) => (
              <div key={i}>
                <img
                  src={image}
                  className="w-full h-[750px] sm:h-[500px] object-cover"
                  alt={`Slider Image ${i + 1}`}
                />
              </div>
            ))}
          </Carousel>
          <div className="absolute inset-0 right-0 bg-gradient-to-br sm:bg-gradient-to-l from-green-700 sm:from-green-500/70 to-transparent"></div>
        </>
      )}
    </div>
  );
};

export default Header;
