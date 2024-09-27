import { quantum } from "ldrs";
import { useEffect } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCampaignById } from "~/redux/slices/campaignSlice";

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
      <div className="w-full h-full gap-x-4 text-sm sm:text-3xl font-semibold rounded-md shadow-md py-5 flex justify-center items-center border-2 border-primary text-primary">
        <BiSolidOffer className="sm:text-3xl text-lg font-semibold" />
        Sınırlı süredeki kampanya için acele edin!
      </div>
      <div className="h-full shadow-lg p-4 sm:p-12 border rounded-md flex sm:flex-row flex-col justify-start items-center">
        <div className="w-full">
          <img
            src={image}
            alt={cityName}
            className="w-full h-[400px] object-cover rounded-md"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start p-5 sm:p-12 gap-y-2">
          <h1 className="text-4xl font-semibold">{cityName}</h1>
          <div className="text-zinc-500">
            <p>
              • Kampanya <strong>31.12.2024'e</strong> kadar geçerlidir.
            </p>
            <p>
              • Kampanya'dan yararlanabilmek için{" "}
              <strong>kayıt olmalısınız.</strong>
            </p>
            <p>
              • Kampanya'dan yararlanabilmek için{" "}
              <strong>e-posta doğrulaması </strong>
              yapmalısınız.
            </p>

            <p>
              • Kampanya'ya dahil edilen şehirler:
              <b> Çanakkale, İstanbul, Balıkesir.</b>
            </p>
            <p>
              • Hangi şehirde olursan ol {cityName} şehrine gitmek istersen bu
              kampanyadan yararlanabilirsin!.
            </p>

            <p>
              • <span className="line-through">{oldPrice} TL</span> 'den{" "}
              {newPrice}
              TL'ye
              <span className="text-primary"> {discount} </span> indirim fırsatı
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
