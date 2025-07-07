import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../../ErrorMessage";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { mergeClassNames } from "../../../utils";
const PasswordInput = React.forwardRef((props, ref) => {
  const {
    placeholder,
    name,
    label,
    labelStyle,
    inputStyle,
    className,
    ...rest
  } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev);
  }

  return (
    <div className={mergeClassNames("flex flex-col mt-5 mx-auto", className)}>
      <label
        className={twMerge(
          clsx("font-[500] text-lightGrey2 leading-[20px] capitalize", labelStyle)
        )}
        htmlFor={name}
      >
        {label}
      </label>
      <Field name={name} id={name}>
        {({ field }) => (
          <div className="relative">
            <input
              ref={ref}
              autoComplete={placeholder}
              type={isPasswordVisible ? "text" : "password"}
              className={twMerge(
                "w-full font-medium placeholder:opacity-70 bg-gray-200 rounded-lg placeholder:text-gray-400 text-sm border-none placeholder:font-medium focus:shadow-none shadow-none px-3.5 py-2.5 mt-1.5",
                inputStyle
              )}
              placeholder={placeholder}
              {...rest}
              {...field}
            />
            <button
              className="absolute inset-y-0 top-2 right-0 flex items-center px-4 text-gray-600"
              onClick={togglePasswordVisibility}
              type="button"
            >
              <span className="paswordIconLabel">
                <img
                  src={
                    isPasswordVisible
                      ? "/assets/icons/eye-solid.svg"
                      : "/assets/icons/eye-slash.svg"
                  }
                  className="h-6 w-6"
                  alt={isPasswordVisible ? "show-password" : "hide-password"}
                />
              </span>
            </button>
          </div>
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  );
});

export default PasswordInput;
