import { BiBus } from "react-icons/bi";
import FilterForm from "./FilterForm";

const Filter = () => {
  return (
    <div className="container w-full md:w-full sm:w-3/4 h-full  flex justify-center items-center mx-auto px-10 sm:px-14 flex-col gap-y-2 ">
      <div className="w-full">
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-md w-[150px] gap-x-2 flex justify-center items-center font-rubik py-1 ">
          <BiBus /> Sefer Ara
        </div>
      </div>
      <div className="w-full py-7 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white rounded-md border px-4 sm:p-6 flex flex-col gap-y-5">
        <div className="w-full">
          <h1 className="text-base sm:text-lg font-rubik">
            Sana en uygun bileti ara ve online rezervasyon gerçekleştir!
          </h1>
        </div>
        <FilterForm />
      </div>
    </div>
  );
};
export default Filter;
