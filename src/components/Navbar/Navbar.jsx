import React from "react";
import Starter from "./Starter/Starter";
import NavigationBar from "./NavigationBar";

const Navbar = ({ open, setOpen }) => {
  return (
    <div>
      <Starter />
      <NavigationBar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
