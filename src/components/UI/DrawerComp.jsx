import React, { useState } from "react";

import Register from "./Register";
import LoginDrawer from "./LoginDrawer";

const DrawerComp = ({ open, setOpen }) => {
  const [logInMode, setLogInMode] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      {logInMode ? (
        <LoginDrawer
          open={open}
          toggleDrawer={toggleDrawer}
          setLogInMode={setLogInMode}
        />
      ) : (
        <Register
          open={open}
          toggleDrawer={toggleDrawer}
          setLogInMode={setLogInMode}
        />
      )}
    </div>
  );
};

export default DrawerComp;
