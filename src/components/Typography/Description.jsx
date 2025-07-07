import React from "react";
import { senaryHeading } from "../../global/TailwindVariables";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Description = ({ text, className = "", onClick = () => {} }) => {
  return (
    <p
      className={twMerge(clsx(senaryHeading, className && className))}
      onClick={onClick}
    >
      {text}
    </p>
  );
};

export default Description;
