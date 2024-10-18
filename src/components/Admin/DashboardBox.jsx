import React from "react";

const DashboardBox = ({ data, icon, label, color }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:border-gray-700  w-full rounded-md shadow-lg p-3 border  flex items-center gap-x-5">
      <div className="w-[20%] flex justify-center items-center border-r border-zinc-300">
        <div className={`p-3  bg-${color} lg:text-4xl rounded-full text-white`}>
          {icon}
        </div>
      </div>
      <div className="p-4 w-[80%] flex-col flex items-start justify-center gap-y-1">
        <h1 className="lg:text-4xl text-2xl text-zinc-700 dark:text-white">
          {data}
        </h1>
        <span className="lg:text-lg text-base text-zinc-400 dark:text-white">
          {label}
        </span>
      </div>
    </div>
  );
};

export default DashboardBox;
