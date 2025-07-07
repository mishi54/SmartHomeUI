import React from "react";
import { ErrorMessage, Field } from "formik";
import ErrorMsg from "../../ErrorMessage";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Textarea = ({
  placeholder,
  height,
  label,
  id,
  name,
  className,
  labelStyle,
  showErrorMsg = true,
  inputStyle,
  rows = 4,
  ...props
}) => {
  return (
    <div className={twMerge(clsx("mt-4", className && className))}>
      {label && (
        <label
          htmlFor={id}
          className={twMerge(
            clsx(
              "font-[500] text-lightGrey2 text-sm leading-[20px] capitalize",
              labelStyle && labelStyle,
            ),
          )}
        >
          {label}
        </label>
      )}
      <Field
        as="textarea"
        className={twMerge(
          clsx(
            "block p-2.5 mt-2 text-sm text-gray-900  rounded-lg border placeholder:text-dark placeholder:text-opacity-40 placeholder:font-medium font-medium placeholder:opacity-70 bg-gray-200 w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500",
            inputStyle && inputStyle,
          ),
        )}
        rows={rows}
        name={name}
        placeholder={placeholder}
        {...props}
      />
        {showErrorMsg && 
      <ErrorMessage name={name} component={ErrorMsg} />}
    </div>
  );
};

export default Textarea;
