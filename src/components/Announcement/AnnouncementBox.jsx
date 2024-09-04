import star from "../../assets/banner/star.svg";

const AnnouncementBox = ({ annItem }) => {
  return (
    <div className="py-7 flex justify-center items-center font-rubik flex-col gap-y-2 sm:w-full w-[80%] rounded-xl  text-center sm:text-left">
      <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#6B848E] to-primary bg-clip-text text-transparent">
        {annItem?.title}
      </h1>
      <span className="text-sm text-[rgb(107,132,142)] ">
        {annItem?.titleDesc}
      </span>
      <div className="w-full relative shadow-xl rounded-md h-[250px] sm:h-[500px] object-cover  mt-2  ">
        <img
          src={annItem?.image}
          alt="Announcement Image"
          className="w-full rounded-md h-[250px] sm:h-[500px] object-cover drop-shadow-2xl mt-2"
        />
        <img
          src={star}
          alt="Star"
          className="absolute top-0 right-0 sm:w-[150px] w-12 sm:-top-12 sm:-left-12 drop-shadow-xl transform rotate-[10deg]"
        />
        <div className="drop-shadow-sm hidden absolute left-5 max-w-[550px] top-52 -transform-y-1/2 gap-y-2 sm:flex p-3 flex-col">
          <span className="bg-gradient-to-r from-hoverPrimary to-primary bg-clip-text text-transparent text-2xl font-semibold">
            {annItem?.annTitle}
          </span>
          <p className="text-zinc-50 text-base">{annItem?.annDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBox;
