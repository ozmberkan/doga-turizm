import { Link } from "react-router-dom";

const AnnouncementBox = ({ annItem }) => {
  return (
    <div className="py-7 flex justify-center items-start font-rubik flex-col gap-y-2 sm:w-full w-[80%] rounded-xl   text-left sm:text-left bg-white p-12 border ">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#6B848E] drop-shadow-sm to-primary bg-clip-text text-transparent">
          {annItem?.title}
        </h1>
        <span className="text-sm text-[rgb(107,132,142)] drop-shadow-sm ">
          {annItem?.titleDesc}
        </span>
      </div>

      <div className="w-full relative  rounded-md h-[250px] sm:h-[300px] shadow-xl object-cover">
        <img
          src={annItem?.image}
          alt="Announcement Image"
          className="w-full rounded-md h-full object-cover drop-shadow-2xl "
        />
        <div className="drop-shadow-sm sm:flex hidden absolute max-w-[550px] top-[30%] left-4 -transform--1/2 flex-col gap-y-3">
          <span className="text-zinc-100 text-2xl font-semibold">
            {annItem?.annTitle}
          </span>
          <p className="text-zinc-50 text-base">{annItem?.annDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBox;
