import React from "react";
import Logo from "../../assets/LogoBlack.png";

const Loading = () => {
  return (
    <div className="w-full  flex justify-center items-center">
      <img src={Logo} className="animate-ping w-44" />
    </div>
  );
};

export default Loading;
