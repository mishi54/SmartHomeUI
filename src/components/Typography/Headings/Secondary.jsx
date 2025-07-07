import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { secondaryHeading } from "../../../global/TailwindVariables";

const SecondaryHeading = ({ text, className = "" }) => {
  return (
    <h6 className={twMerge(clsx(secondaryHeading, className && className))}>
      {text}
    </h6>
  );
};

export default SecondaryHeading;
