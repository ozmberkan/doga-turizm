import React from "react";
import banner from "../../assets/banner/banner.png";
import star from "../../assets/banner/star.svg";

const Announcement = () => {
  return (
    <div className="container w-full sm:w-2/3 h-full flex justify-center items-center mx-auto gap-y-2 sm:my-5 my-5">
      <div className="py-7 flex justify-center items-center font-rubik flex-col gap-y-2 sm:w-full w-[80%] bg-white rounded-xl shadow-lg  border sm:px-12 px-4 text-center sm:text-left">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#004252] to-[#22C469] bg-clip-text text-transparent">
          Doğa Turizm Şimdi Mobil Versiyonda!
        </h1>
        <span className="text-sm text-zinc-700">
          Yeni güncellemeyle beraber artık Doğa Turizm'den cep telefonlarınız
          ile online rezervasyon yapabilirsiniz.
        </span>
        <div className="w-full h-full relative">
          <img
            src={banner}
            className="w-full rounded-md h-[250px] sm:h-[500px] border  object-cover drop-shadow-2xl mt-2"
          />
          <img
            src={star}
            alt=""
            className="absolute top-0 right-0 sm:w-[150px] w-12 sm:-top-12 sm:-right-12 drop-shadow-xl transform rotate-[10deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
