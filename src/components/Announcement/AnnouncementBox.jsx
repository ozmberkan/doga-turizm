const AnnouncementBox = ({ annItem }) => {
  return (
    <div className="py-7 flex justify-center items-start font-rubik flex-col gap-y-2 text-center sm:w-full w-[80%] rounded-xl   sm:text-left  bg-white sm:p-12 p-3 border ">
      <div className="mb-5 flex flex-col gap-y-3 ">
        <h1 className="sm:text-3xl text-xl font-semibold bg-gradient-to-r from-[#6B848E] drop-shadow-sm to-primary bg-clip-text text-transparent">
          {annItem?.title}
        </h1>
        <span className="sm:text-sm text-xs text-[rgb(107,132,142)] drop-shadow-sm ">
          {annItem?.titleDesc}
        </span>
      </div>

      <div className="w-full relative rounded-md  sm:h-[300px] shadow-xl object-cover">
        <img
          src={annItem?.image}
          alt="Announcement Image"
          className="w-full rounded-md h-full sm:object-cover object-contain drop-shadow-2xl "
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
