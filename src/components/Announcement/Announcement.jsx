import React from "react";
import Banner from "../../assets/banner.png";

const Announcement = () => {
  return (
    <div className="container w-full sm:w-2/3 h-full flex justify-center items-center z-20 mx-auto flex-col gap-y-2 sm:my-5 my-5">
      <div className="py-5 flex justify-center items-center font-rubik flex-col gap-y-2 w-full bg-white rounded-md border px-4 text-center sm:text-left">
        <h1 className="text-3xl">Doğa Turizm Şimdi Mobil Versiyonda!</h1>
        <span className="text-sm text-zinc-700">
          Yeni güncellemeyle beraber artık Doğa Turizm'den cep telefonlarınız
          ile online rezervasyon yapabilirsiniz.
        </span>
        <div className="w-full h-full">
          <img
            src={Banner}
            alt=""
            className="w-full rounded-md h-[350px]  object-cover shadow-xl mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
