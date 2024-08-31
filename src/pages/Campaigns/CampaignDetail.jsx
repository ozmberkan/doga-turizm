import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CampaignDetail = () => {
  const { campaigns } = useSelector((store) => store.campaigns);
  const { id } = useParams();
  const campaign = campaigns.find((campaign) => campaign.id === id);
  const { image, cityName, newPrice, oldPrice } = campaign;
  const discount = Math.floor(((oldPrice - newPrice) / oldPrice) * 100) + "%";

  if (!campaign) {
    return (
      <div className="w-full flex justify-center items-center p-12">
        <span className="w-full text-xl bg-red-200 text-red-500 rounded-md border px-4 py-2">
          Kampanya bulunamadı, lütfen geliştirici ile iletişim kurunuz!
        </span>
      </div>
    );
  }

  return (
    <div className="w-full p-5 flex flex-col gap-y-5 container mx-auto">
      <div className="w-full h-full gap-x-4 text-sm sm:text-3xl rounded-md shadow-md py-5 flex justify-center items-center border-2 border-[#4EC546] text-[#4EC546]">
        <BiSolidOffer className="sm:text-3xl text-lg" />
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
            <p>• Kampanya 31.12.2024'e kadar geçerlidir.</p>
            <p>• Kampanya'dan yararlanabilmek için kayıt olmalısınız.</p>
            <p>
              • Kampanya'dan yararlanabilmek için e-posta doğrulaması
              yapmalısınız.
            </p>
            <p>
              • Kampanya'dan yararlanabilmek için 18 yaşını doldurmalısınız.
            </p>
            <p>
              • Kampanya'ya dahil edilen şehirler:
              <b>Bursa, Balıkesir, Edirne, Çanakkale, Tekirdağ.</b>
            </p>
            <p>
              • Hangi şehirde olursan ol {cityName} şehrine gitmek istersen bu
              kampanyadan yararlanabilirsin!.
            </p>

            <p>
              • <span className="line-through">{oldPrice} TL</span> 'den{" "}
              {newPrice} TL'ye
              <span className="text-green-500"> {discount}</span> indirim
              fırsatı
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
