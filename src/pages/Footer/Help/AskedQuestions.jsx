import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { questions } from "~/data/data";

const AskedQuestions = () => {
  return (
    <FooterDetailBox>
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">Sıkça Sorulan Sorular</h1>
        <div className="w-full max-w-3xl">
          {questions.map((item, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-xl font-semibold dark:text-gray-400">{item.question}</h2>
              <p className="text-base text-gray-700 mt-2 dark:text-white">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </FooterDetailBox>
  );
};

export default AskedQuestions;
