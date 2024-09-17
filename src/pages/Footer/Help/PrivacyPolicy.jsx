import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { privacyPolicyData } from "~/data/data";

const PrivacyPolicy = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">Gizlilik Politikası</h1>
        {privacyPolicyData.map((section) => (
          <div key={section.id} className="text-left">
            <strong>{section.title}</strong>
            <p>{section.text}</p>
            {section.items && (
              <ul className="list-disc list-inside mt-2">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </FooterDetailBox>
  );
};

export default PrivacyPolicy;
