import React from "react";
import { newtonsCradle } from "ldrs";

newtonsCradle.register();

export const Loading = () => {
  return (
    <div className="w-full min-h-screen  bg-white flex justify-center items-center absolute top-0 z-20">
      <l-newtons-cradle size="78" speed="1.4" color="black"></l-newtons-cradle>
    </div>
  );
};
