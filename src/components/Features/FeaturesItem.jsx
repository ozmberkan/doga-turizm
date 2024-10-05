import { BsTicketDetailed } from "react-icons/bs";
import { FaTree, FaUsersViewfinder } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";

const FeaturesItem = ({ item }) => {
  return (
    <div className="bg-white dark:bg-gray-800  w-full p-4 flex items-center gap-x-3 rounded-xl shadow-xl hover:scale-105 transition-all duration-500 ">
      <span
        className={`p-3 rounded-full bg-green-100 text-green-500 flex justify-center items-center
        ${item.icon === FaUsersViewfinder && "!bg-red-100 !text-red-500"}
        ${item.icon === GiReceiveMoney && "!bg-blue-100 !text-blue-500"}
        ${item.icon === BsTicketDetailed && "!bg-orange-100 !text-orange-500"}
        ${item.icon === FaTree && "!bg-emerald-100 !text-emerald-500"}
        `}
      >
        {item.icon && <item.icon size={20} />}
      </span>
      <div className="text-zinc-700 dark:text-white">
        <h1 className="font-medium">{item.title}</h1>
        <span className="text-xs">{item.description}</span>
      </div>
    </div>
  );
};

export default FeaturesItem;
