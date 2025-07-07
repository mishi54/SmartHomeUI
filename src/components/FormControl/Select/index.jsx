import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../../ErrorMessage";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const CustomSelect = (props) => {
  const {
    name,
    placeholder,
    label,
    labelStyle,
    selectInputStyle,
    options,
    className,
    ...rest
  } = props;

  return (
    <div className={twMerge(clsx("mt-4", className && className))}>
      {label && (
        <label
          className={twMerge(
            clsx(
              "font-[500] text-lightGrey2 text-sm leading-[20px] capitalize",
              labelStyle && labelStyle,
            ),
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative mt-1">
        <Field
          placeholder={placeholder}
          {...rest}
          as="select"
          name={name}
          id={name}
          className={twMerge(
            clsx(
              "font-poppin border-none font-medium placeholder:opacity-70 bg-gray-200 text-black text-sm rounded-lg :placeholder-opacity-40 block w-full p-2.5 appearance-none cursor-pointer",
              selectInputStyle && selectInputStyle,
            ),
          )}
        >
          <option value="" className="text-opacity-70">
            {placeholder}
          </option>
          {options.map(({ key, value }) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </Field>
      </div>
      <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  );
};

export default CustomSelect;
