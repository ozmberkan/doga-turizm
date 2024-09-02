import Typewriter from "typewriter-effect";

const TypewriterComp = () => {
  return (
    <h1 className="font-rubik text-xs sm:text-base font-normal">
      <Typewriter
        options={{
          strings: [
            "Rüya gibi bir yolculuğa hazır olun!",
            "Rahat ve konforlu yolculuk için buradayız!",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
};

export default TypewriterComp;
