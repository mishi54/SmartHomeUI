import React from "react";
import { quinaryHeading } from "../../../global/TailwindVariables";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import Description from "../../../components/Typography/Description";

const AuthCaption = ({
  title = "Don’t have an account?",
  action = "Create Account",
  link = "/signup",
}) => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-wrap items-center justify-end gap-2">
      <Description
        className="text-dark text-md text-opacity-60"
        text={title}
      />
      <p
        className={twMerge(
          `${quinaryHeading} text-md font-bold cursor-pointer text-main hover:underline`,
        )}
        onClick={() => navigate(link)}
      >
        {action}
      </p>
    </div>
  );
};

export default AuthCaption;
