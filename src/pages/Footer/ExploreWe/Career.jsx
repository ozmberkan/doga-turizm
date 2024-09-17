import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { Link } from "react-router-dom";
import { careerData } from "~/data/data";

const Career = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-12">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-start">
        {careerData.map((section) => (
          <div key={section.id} className="text-left">
            {section.title && <h1 className="text-4xl">{section.title}</h1>}
            {section.text && <p>{section.text}</p>}

            {section.items && (
              <ul className="list-disc list-inside mt-2">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.subtitle}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            )}

            {section.positions && (
              <ul className="list-disc list-inside mt-2">
                {section.positions.map((position, index) => (
                  <li key={index}>
                    <strong>{position.position}:</strong> {position.description}
                  </li>
                ))}
              </ul>
            )}

            {section.id === 4 && (
              <p>
                Doğa Turizm’de kariyer fırsatlarını keşfetmek ve ekibimize
                katılmak için{" "}
                <Link to="/contact" className="text-green-500 underline">
                  web sitemizdeki başvuru formunu doldurabilir
                </Link>{" "}
                veya özgeçmişinizi dogaturizm@carier.com adresine
                gönderebilirsiniz. Başvurularınız incelenecek ve uygun
                pozisyonlarda sizinle iletişime geçilecektir.
              </p>
            )}
          </div>
        ))}
      </div>
    </FooterDetailBox>
  );
};

export default Career;
