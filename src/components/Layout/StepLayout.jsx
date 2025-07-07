import React from "react";
import { Outlet} from "react-router-dom";
import Steps from "../../Pages/Onboarding/Steps.jsx";

const StepsLayout = () => {

  return (
    <>
      <Steps />
      <main className="flex items-center justify-center mt-0 md:mt-14">
        <Outlet />
      </main>
    </>
  );
};

export default StepsLayout;
