import TypewriterComp from "./children/Typewriter";
import SocialMedia from "./children/SocialMedia";

const Starter = () => {
  return (
    <div className="sm:w-full w-full gap-y-2 text-white sm:gap-0 sm:px-14 py-2 dark:bg-gray-900 bg-primary sm:text-white mx-auto flex justify-between items-center flex-col sm:flex-row ">
      <TypewriterComp />
      <SocialMedia />
    </div>
  );
};

export default Starter;
