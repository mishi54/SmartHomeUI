import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { quinaryHeading } from "../../global/TailwindVariables";

const QuinaryText = ({ text, className = "",onClick=()=>{} }) => {
  return (
    <p onClick={onClick} className={twMerge(clsx(quinaryHeading, className && className))}>
      {text}
    </p>
  );
};

export default QuinaryText;
