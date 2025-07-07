import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { primaryHeading } from "../../../global/TailwindVariables";

const PrimaryHeading = ({ text, className = "" }) => {
  return (
    <h6 className={twMerge(clsx(primaryHeading, className && className))}>
      {text}
    </h6>
  );
};

export default PrimaryHeading;
