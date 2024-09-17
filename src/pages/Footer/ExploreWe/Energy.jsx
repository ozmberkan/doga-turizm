import logoBlack from "~/assets/logos/LogoBlack.png";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import { energyData } from "~/data/data";

const Energy = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-left mb-12">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-left">
        <h1 className="text-4xl">Yenilenebilir Enerji</h1>
        {energyData.map((energy) => (
          <p key={energy.id} className="text-left ">
            {energy.text}
          </p>
        ))}
      </div>
    </FooterDetailBox>
  );
};

export default Energy;
