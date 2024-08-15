import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Fade } from "@mui/material";
import { MdCampaign } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaCity } from "react-icons/fa";

const MenuComp = ({ isMenu, openn, handleClose }) => (
  <Menu
    id="fade-menu"
    MenuListProps={{
      "aria-labelledby": "fade-button",
    }}
    anchorEl={isMenu}
    open={openn}
    onClose={handleClose}
    TransitionComponent={Fade}
  >
    <div className="p-2 flex flex-col gap-y-2">
      <MenuItem onClick={handleClose} className="flex gap-x-2 items-center">
        <span className="text-zinc-600">
          <FaCity size={20} />
        </span>
        <span className="text-zinc-600 font-rubik">Şehirler</span>
      </MenuItem>
      <MenuItem onClick={handleClose} className="flex gap-x-2 items-center">
        <span className="text-zinc-600">
          <MdCampaign size={20} />
        </span>
        <span className="text-zinc-600 font-rubik">Kampanyalar</span>
      </MenuItem>
      <MenuItem onClick={handleClose} className="flex gap-x-2 items-center ">
        <span className="text-zinc-600">
          <IoCall size={20} />
        </span>
        <span className="text-zinc-600 font-rubik">İletişim</span>
      </MenuItem>
    </div>
  </Menu>
);

export default MenuComp;
