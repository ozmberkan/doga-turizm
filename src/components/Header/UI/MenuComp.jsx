import React from "react";
<<<<<<< HEAD

const MenuComp = () => {
  return <div>MenuComp</div>;
=======
import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const MenuComp = () => {
  return (
    <HeadlessMenu>
      <MenuItems className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
        {links.map((link) => (
          <MenuItem key={link.href} className="hover:bg-blue-100">
            <a href={link.href} className="block px-4 py-2 text-gray-700">
              {link.label}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </HeadlessMenu>
  );
>>>>>>> 5e6caff48d75ea1d87cd39f3de81edafb4bdc8d4
};

export default MenuComp;
