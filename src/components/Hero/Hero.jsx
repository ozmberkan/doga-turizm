import { Carousel, theme } from "antd";
import { carouselImg } from "../../data/data";
import Filter from "./Filter";
import { useSelector } from "react-redux";

const Hero = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div className="relative h-[750px] sm:h-[500px]">
      <div className="w-full flex flex-col top-5 sm:inset-0 absolute z-10">
        <Filter />
      </div>
      <Carousel autoplay dots={false} fade>
        {carouselImg.map((img, i) => (
          <div>
            <img
              key={i}
              src={img}
              className="w-full h-[750px] sm:h-[500px] object-cover"
              alt="Slider Images"
            />
            {theme === "dark" && (
              <div className="absolute inset-0 bg-black opacity-70"></div>
            )}
          </div>
        ))}
      </Carousel>
      <div className="absolute inset-0 right-0 bg-gradient-to-br sm:bg-gradient-to-bl from-green-700 sm:from-green-500/70 to-transparent"></div>
    </div>
  );
};

export default Hero;
