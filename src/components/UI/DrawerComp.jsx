import React, { useState } from "react";

import Register from "./Register/RegisterDrawer";
import LoginDrawer from "./Login/LoginDrawer";
import ForgotComp from "./ForgotComp";

const DrawerComp = ({ open, setOpen }) => {
  const [logInMode, setLogInMode] = useState(true);
  const [forgot, setForgot] = useState(false);
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
          setForgot={setForgot}
        />
      ) : (
        <Register
          open={open}
          toggleDrawer={toggleDrawer}
          setLogInMode={setLogInMode}
        />
      )}
      {forgot && (
        <ForgotComp
          setForgot={setForgot}
          toggleDrawer={toggleDrawer}
          open={open}
        />
      )}
    </div>
  );
};

export default DrawerComp;
