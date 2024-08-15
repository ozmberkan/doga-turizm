import React from "react";
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
};

export default MenuComp;
