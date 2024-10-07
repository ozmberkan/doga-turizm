import { quantum } from "ldrs";
import { useEffect } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCampaignById } from "~/redux/slices/campaignSlice";
import { CiCalendarDate } from "react-icons/ci";

//
import { FiInfo } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { TbLocation } from "react-icons/tb";

const CampaignDetail = () => {
  quantum.register();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampaignById(id));
  }, []);

  const { currentCampaign, isLoading, isError } = useSelector(
    (store) => store.campaigns
  );

  if (isError) {
    return (
      <div className="w-full flex justify-center items-center p-12">
        <span className="w-full text-xl bg-red-200 text-red-500 rounded-md border px-4 py-2">
          Kampanya bulunamadı, lütfen geliştirici ile iletişim kurunuz!
        </span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <l-quantum size="90" speed="1.75" color="#4FC646"></l-quantum>;
      </div>
    );
  }

  const { cityName, image, oldPrice, newPrice } = currentCampaign;
  const discount = Math.floor(((oldPrice - newPrice) / oldPrice) * 100) + "%";

  return (
    <div className="w-full p-5 flex flex-col gap-y-5 container mx-auto">
      <div className="flex flex-col gap-y-1">
        <div className="w-full text-lg sm:text-2xl dark:text-white font-semibold  py-1 flex justify-center items-center text-primary">
          {cityName} Yolculuk Kampanyası
        </div>
        <div className="w-full flex flex-col text-xs sm:text-base font-medium gap-y-3  py-1 justify-center items-center text-neutral-500">
          {cityName} Yolculuğu İçin Özel Fırsat!
          <div className="sm:w-1/2 w-full gap-y-3 flex flex-col justify-center items-center gap-x-5">
            <span className="w-full rounded-full border dark:bg-gray-800 dark:text-white dark:border-gray-700 bg-white whitespace-nowrap py-2 px-5 flex items-center justify-center gap-x-2 font-medium text-zinc-500">
              <CiCalendarDate size={20} />
              Kampanya 31.12.2024'e kadar geçerlidir.
            </span>
            <span className="w-full rounded-full border dark:border-gray-700 bg-red-500 whitespace-nowrap py-2 px-5 flex items-center justify-center gap-x-2 font-medium text-zinc-100">
              <BiSolidOffer size={20} />
              {discount} İndirim Fırsatı
            </span>
          </div>
        </div>
      </div>
      <div className="w-full  sm:h-[400px] rounded-md flex justify-start items-center gap-5 sm:flex-row flex-col">
        <div className="sm:w-1/2 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 h-full p-5 rounded-md border flex flex-col gap-y-12">
          <span className="text-2xl font-semibold">Kampanya Detayları</span>
          <div className="flex flex-col gap-y-3 w-full">
            <p className="flex gap-x-2 items-center justify-start ">
              <span className="text-lg">
                <FiInfo />
              </span>
              <span className="sm:text-base text-sm">
                Kampanyadan yararlanabilmek için kayıt olmalısınız!
              </span>
            </p>
            <p className="flex gap-x-2 items-center justify-start ">
              <span className="text-lg">
                <FaRegEnvelope />
              </span>
              <span className="sm:text-base text-sm">
                Kampanya'dan yararlanabilmek için e-posta doğrulaması
                yapmalısınız.
              </span>
            </p>
            <p className="flex gap-x-2 items-center justify-start ">
              <span className="text-lg">
                <TbLocation />
              </span>
              <span className="sm:text-base text-sm">
                Kampanyaya dahil edilen şehirler: İstanbul,Çanakkale,Balıkesir
              </span>
            </p>
            <p className="flex gap-x-2 items-center justify-start ">
              <span className="text-lg">
                <FiInfo />
              </span>
              <span className="sm:text-base text-sm">
                Hangi şehirde olursan ol İstanbul şehrine gitmek istersen bu
                kampanyadan yararlanabilirsin!
              </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 rounded-md border h-full p-5 sm:gap-y-0 gap-y-5 flex flex-col justify-between items-start">
          <div className="flex flex-col sm:gap-y-0 gap-y-2">
            <h1 className="text-2xl font-semibold">{cityName} 'a/e yolculuk</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              500 TL yerine sadece 400 TL!
            </p>
          </div>
          <img
            src={image}
            className="w-full h-1/2 rounded-md object-cover shadow-xl"
          />
          <Link
            to="/"
            className="w-full bg-primary dark:bg-gray-950 dark:hover:bg-gray-900 hover:bg-hoverPrimary text-white rounded-md p-2 flex justify-center items-center"
          >
            Hemen Rezervasyon Yap
          </Link>
        </div>
      </div>
      <div className="w-full   flex justify-center items-center flex-col mt-5 gap-y-3">
        <h1 className="text-xl font-semibold dark:text-white">
          Fırsatı Kaçırmayın!
        </h1>
        <p className="text-sm text-zinc-600">
          Bu özel indirim 31.12.2024 tarihine kadar geçerlidir.
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-hoverPrimary dark:bg-gray-900 dark:border dark:border-gray-800 dark:hover:bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          Hemen Kayıt Ol
        </Link>
      </div>
    </div>
  );
};

export default CampaignDetail;
