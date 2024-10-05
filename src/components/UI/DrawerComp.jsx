import { useState } from "react";
import RegisterDrawer from "../Auth/Register/RegisterDrawer";
import LoginDrawer from "../Auth/Login/LoginDrawer";
import ForgotComp from "../Auth/Forgot/ForgotComp";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "~/redux/slices/drawerSlice";

const DrawerComp = () => {
  const [logInMode, setLogInMode] = useState(true);
  const [forgot, setForgot] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      {logInMode ? (
        <LoginDrawer setLogInMode={setLogInMode} setForgot={setForgot} />
      ) : (
        <RegisterDrawer setLogInMode={setLogInMode} />
      )}
      {forgot && <ForgotComp setForgot={setForgot} />}
    </div>
  );
};

export default DrawerComp;
