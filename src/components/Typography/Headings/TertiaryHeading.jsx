import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { tertiaryHeading } from "../../../global/TailwindVariables";

const TertiaryHeading = ({ text, className = "" }) => {
  return (
    <h6 className={twMerge(clsx(tertiaryHeading, className && className))}>
      {text}
    </h6>
  );
};

export default TertiaryHeading;
