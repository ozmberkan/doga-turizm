import { useState } from "react";
import RegisterDrawer from "../Auth/Register/RegisterDrawer";
import LoginDrawer from "../Auth/Login/LoginDrawer";
import ForgotComp from "../Auth/Forgot/ForgotComp";

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
        <RegisterDrawer
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
