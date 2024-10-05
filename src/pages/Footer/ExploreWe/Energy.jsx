import logoBlack from "~/assets/logos/LogoBlack.png";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import { energyData } from "~/data/data";

const Energy = () => {
  return (
    <FooterDetailBox>
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
