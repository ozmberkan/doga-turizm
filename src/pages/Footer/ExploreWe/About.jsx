import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";
import { aboutData } from "~/data/data";

const About = () => {
  return (
    <FooterDetailBox>
      <div className="flex flex-col gap-y-5 items-start">
        <h1 className="text-4xl">Hakkımızda</h1>
        {aboutData.map((text) => (
          <p key={text.id}>{text.text}</p>
        ))}
      </div>
    </FooterDetailBox>
  );
};

export default About;
