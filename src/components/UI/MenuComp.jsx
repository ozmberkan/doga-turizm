import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { menus } from "~/data/data";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const MenuComp = () => {
  return (
    <Menu>
      <MenuButton className="outline-none text-black cursor-pointer hover:text-green-400 transition-all duration-500 ">
        <BiMenu size={30} />
      </MenuButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 -translate-y-4"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 -translate-y-4"
      >
        <MenuItems
          anchor="bottom end"
          className="[--anchor-gap:4px] sm:[--anchor-gap:8px] bg-white rounded-md p-3 border border-black/15 outline-none absolute z-30"
        >
          {menus.map((menu, index) => (
            <MenuItem key={index}>
              <Link
                className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-3 "
                to={menu.to}
              >
                <h1 className="flex items-center gap-x-2 text-zinc-600/80">
                  {" "}
                  <span>
                    <menu.icon size={20} />
                  </span>
                  {menu.label}
                </h1>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default MenuComp;
