import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { protectPersonelData } from "~/data/data";

const ProtectPersonelData = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start text-left">
        <h1 className="text-4xl">{protectPersonelData[0].title}</h1>
        <p>{protectPersonelData[0].text}</p>
        {protectPersonelData.slice(1).map((section) => (
          <div key={section.id} className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </FooterDetailBox>
  );
};

export default ProtectPersonelData;
