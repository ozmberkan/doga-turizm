import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { Link } from "react-router-dom";
import { hiringData } from "~/data/data";

const Hiring = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-start mb-6">
        <img src={logoBlack} alt="Doğa Turizm Logo" className="w-44" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-left text-left">
        {hiringData.map((section) => (
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
            {section.id === 4 && (
              <p>
                Başvurunuzu dogaturizm@career.com üzerinden bize iletebilir veya{" "}
                <Link to={section.link} className="text-primary underline">
                  başvuru formu linki
                </Link>{" "}
                üzerinden online başvuru yapabilirsiniz. Tüm başvurular
                titizlikle değerlendirilecek ve uygun adaylarla iletişime
                geçilecektir.
              </p>
            )}
          </div>
        ))}
      </div>
    </FooterDetailBox>
  );
};

export default Hiring;
