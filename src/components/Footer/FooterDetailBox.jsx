import React, { useEffect } from "react";
import Footer from "./Footer";

const FooterDetailBox = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-5 sm:px-5 px-3 flex-col container mx-auto">
      <div className="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-md sm:p-12 p-5 border w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default FooterDetailBox;
