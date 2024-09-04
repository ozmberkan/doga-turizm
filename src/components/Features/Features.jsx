import { features } from "~/data/data";
import FeaturesItem from "./FeaturesItem";

const Features = () => {
  return (
    <div className="container mx-auto w-3/4 sm:w-2/3  my-12 rounded-md items-start flex-col gap-y-5 mt-12 py-5 flex ">
      <h1 className="text-2xl text-zinc-700 font-semibold">
        Neden Doğa Turizm ?
      </h1>
      <div className="gap-5 grid grid-cols-4 place-items-center w-full ">
        {features.map((item) => (
          <FeaturesItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Features;
