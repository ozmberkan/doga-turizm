import React from "react";

const CampaignBox = ({ campaign }) => {
  const { image, cityName, price, prevPrice, discount } = campaign;
  return (
    <div className="flex justify-center items-center border bg-white rounded-md flex-col p-4 gap-y-3 shadow-md">
      <img
        src={image}
        className="rounded h-[200px] w-full object-cover cursor-pointer"
      />
      <div className="flex justify-between items-center w-full  ">
        <div className="flex justify-start items-start gap-y-1 flex-col ">
          <h1 className="text-2xl ">{cityName}</h1>
          <div className="flex items-center justify-center gap-x-1">
            <span className="text-zinc-600">{price}₺</span>
            <span className="line-through text-xs text-zinc-600">
              {prevPrice}₺
            </span>
            <span className="p-1 bg-green-200 text-green-600 rounded-full text-xs">
              {discount}
            </span>
          </div>
        </div>
        <button className="px-2 py-1 text-xs sm:px-4 sm:py-2 rounded-md bg-green-500 text-white smtext-sm hover:bg-green-600 transition-colors duration-500">
          Detaylar
        </button>
      </div>
    </div>
  );
};

export default CampaignBox;
