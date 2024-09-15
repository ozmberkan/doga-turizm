import { NavLink } from "react-router-dom";
import { sideBarTabs } from "~/data/data";

const ProfileMenu = () => {
  return (
    <div className="min-w-[15%] bg-white p-5 gap-y-5 flex flex-col border">
      {sideBarTabs.map(({ id, to, icon: Icon, label }) => (
        <NavLink
          key={id}
          to={to}
          className={({ isActive }) =>
            `px-4 py-2 transition-colors rounded-md text-black border flex justify-start items-center gap-x-3 cursor-pointer ${
              isActive
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`
          }
        >
          <Icon className="mr-2" /> {label}
        </NavLink>
      ))}
    </div>
  );
};

export default ProfileMenu;
