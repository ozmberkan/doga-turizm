import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { campaigns } from "~/data/data";

const CampaignDetail = () => {
  const { id } = useParams();

  const campaign = campaigns.find((campaign) => campaign.id === Number(id));

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
    <div className="w-full p-5 flex flex-col gap-y-5">
      <div className="w-full h-full gap-x-4 text-sm sm:text-4xl rounded-md text-white py-5 flex justify-center items-center bg-gradient-to-r from-green-500 to-green-700 ">
        <BiSolidOffer className="sm:text-4xl text-lg" />
        Sınırlı süredeki kampanya için acele edin!
      </div>
      <div className="bg-white h-full shadow-lg gap-x-5 px-4 py-2 border rounded-md flex sm:flex-row flex-col justify-start items-center">
        <div>
          <img
            src={campaign.image}
            alt={campaign.cityName}
            className="w-[400px] rounded-md"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start p-5 sm:p-12 gap-y-5">
          <h1 className="text-4xl">{campaign.cityName}</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad
          exercitationem molestias tenetur illo voluptatum quisquam laborum
          alias? Fugiat blanditiis esse id aspernatur suscipit possimus sint,
          quas maxime modi numquam nostrum voluptatum dolorum asperiores
          eligendi pariatur provident similique architecto in est omnis
          accusantium ipsa mollitia harum voluptate! Laboriosam incidunt,
          adipisci nihil debitis provident maxime illo animi pariatur unde
          magnam mollitia cum. Magnam qui aperiam in doloribus nostrum vero
          quidem dolores provident, consequatur libero, temporibus maiores? Quos
          ipsum odit perspiciatis totam est? Optio ab incidunt laborum eos
          ratione corrupti sint ipsum quod possimus, doloribus, dolore cum ex
          asperiores perferendis voluptatum mollitia.
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
