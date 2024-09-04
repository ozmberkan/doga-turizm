import star from "../../assets/banner/star.svg";

const Announcement = () => {
  return (
    <div className="container w-full sm:w-2/3 h-full  flex justify-center items-center mx-auto gap-y-2 sm:my-5 my-5">
      <div className="py-7 flex justify-center items-center font-rubik flex-col gap-y-2 sm:w-full w-[80%] rounded-xl  text-center sm:text-left">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#6B848E] to-primary bg-clip-text text-transparent">
          Doğa Turizm Şimdi Mobil Versiyonda!
        </h1>
        <span className="text-sm text-[#6B848E] ">
          Yeni güncellemeyle beraber artık Doğa Turizm'den cep telefonlarınız
          ile online rezervasyon yapabilirsiniz.
        </span>
        <div className="w-full relative shadow-xl rounded-md h-[250px] sm:h-[500px] border sm:bg-banner bg-banner-mobile object-cover drop-shadow-2xl mt-2 bg-center bg-cover ">
          <img
            src={star}
            alt=""
            className="absolute top-0 right-0 sm:w-[150px] w-12 sm:-top-12 sm:-left-12 drop-shadow-xl transform rotate-[10deg]"
          />
          <div className="drop-shadow-sm hidden absolute left-5 max-w-[550px] top-52 -transform-y-1/2 gap-y-2 sm:flex p-3 flex-col">
            <span className="bg-gradient-to-r from-hoverPrimary to-primary bg-clip-text text-transparent text-2xl font-semibold">
              Doğa Turizm sizlerin konforu için çalışıyor!
            </span>
            <p className="text-zinc-50 text-base">
              Şimdi doğa turizm cep telefonlardan da erişilebilir halde.
              Kolaylıkla cep telefonlarınız ile online rezervasyon
              yapabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
