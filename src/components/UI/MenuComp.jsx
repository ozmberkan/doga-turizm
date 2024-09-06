import { Link } from "react-router-dom";
import { menus } from "~/data/data";

const MenuComp = () => {
  return (
    <div className="w-44 shadow-md absolute top-full right-0 sm:right-0 rounded p-4 bg-white border transition-all duration-300 z-30 flex flex-col gap-y-2">
      {menus.map((item, id) => (
        <Link
          key={id}
          to={item.to}
          className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default MenuComp;
