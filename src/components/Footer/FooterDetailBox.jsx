import React, { useEffect } from "react";
import Footer from "./Footer";

const FooterDetailBox = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-5 px-5 flex-col">
      <div className="bg-white rounded-md p-12 border w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default FooterDetailBox;
