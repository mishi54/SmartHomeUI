import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { senaryHeading } from "../../../global/TailwindVariables";

const SenaryHeading = ({ text, className = "" }) => {
  return (
    <h6 className={twMerge(clsx(senaryHeading, className && className))}>
      {text}
    </h6>
  );
};

export default SenaryHeading;
