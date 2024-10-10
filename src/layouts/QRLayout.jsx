import { Outlet } from "react-router-dom";
import FlexContainer from "~/container/FlexContainer";

const QRLayout = () => {
  return (
    <FlexContainer>
      <Outlet />
    </FlexContainer>
  );
};

export default QRLayout;
