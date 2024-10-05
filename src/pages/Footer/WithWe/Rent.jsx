import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { Link } from "react-router-dom";
import { rentData } from "~/data/data";

const Rent = () => {
  return (
    <FooterDetailBox>
      <div className="flex flex-col gap-y-5 items-start text-left">
        {rentData.map((section) => (
          <div key={section.id} className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p>
              {section.text.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            {section.id === 3 && (
              <p>
                Otobüs kiralama taleplerinizi dogaturizm@help.com üzerinden bize
                iletebilir veya{" "}
                <Link to={section.link} className="text-green-500 underline">
                  kiralama formu linki
                </Link>{" "}
                üzerinden online başvuru yapabilirsiniz. Talep formunuzu
                doldurduktan sonra, en kısa sürede sizinle iletişime geçeceğiz
                ve kiralama süreci hakkında detayları paylaşacağız.
              </p>
            )}
          </div>
        ))}
      </div>
    </FooterDetailBox>
  );
};

export default Rent;
