import { BiSolidOffer } from "react-icons/bi";

const CampaignHeader = () => {
  return (
    <div className="font-rubik flex flex-col gap-y-4 sm:justify-start sm:items-start justify-center items-center w-full sm:text-left text-center">
      <span className="bg-gradient-to-r from-green-500 to-green-700 text-white w-44 justify-center items-center flex text-sm gap-x-2  rounded-md border px-4 py-1">
        <BiSolidOffer size={18} />
        Sınırlı Süreli Teklif
      </span>
      <h1 className="text-2xl sm:text-4xl font-semibold text-zinc-700">
        Bu Fırsatlar Kaçmaz!
      </h1>
      <p className="text-base sm:text-2xl text-zinc-600">
        En çok bilet alınan şehirlerimizde büyük indirimler yakalamak için bu
        inanılmaz fırsatı kaçırmayın. Acele edin, bu teklif uzun sürmeyecek!
      </p>
    </div>
  );
};

export default CampaignHeader;
