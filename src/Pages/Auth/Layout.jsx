import { useEffect } from "react";
import Intro from "./Components/Intro";
import { auth_token_key } from "../../utils/ApiUrls";
import { Outlet, useNavigate } from "react-router-dom";
const AuthLayout = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem(auth_token_key)){
      navigate('/dashboard');
    }
  },[]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Intro />
      <div className="px-6 sm:px-10 flex flex-col justify-center items-center min-h-screen relative w-full md:h-full">
        <section className="max-w-[500px] w-full"><Outlet /></section>
      </div>
    </div>
  );
};

export default AuthLayout;
