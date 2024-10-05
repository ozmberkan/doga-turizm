import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { Link } from "react-router-dom";
import { cookiePolicyData } from "~/data/data";

const CookiePolicy = () => {
  return (
    <FooterDetailBox>
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">Çerez Politikası</h1>
        {cookiePolicyData.map((section) => (
          <div key={section.id} className="text-left">
            {section.title && <strong>{section.title}</strong>}
            {section.text && <p>{section.text}</p>}

            {section.items && (
              <ul className="list-disc list-inside mt-2">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.subtitle}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            )}

            {section.id === 5 && (
              <p>
                Çerezler ve diğer gizlilik konuları hakkında daha fazla bilgi
                için lütfen{" "}
                <Link to={section.link} className="text-green-500 underline">
                  Gizlilik Politikamızı
                </Link>{" "}
                inceleyin.
              </p>
            )}
          </div>
        ))}
      </div>
    </FooterDetailBox>
  );
};

export default CookiePolicy;
