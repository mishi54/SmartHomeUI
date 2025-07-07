import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import ErrorMsg from "../../ErrorMessage";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
const CustomInput = React.forwardRef((props, ref) => {
  const {
    label,
    prefix,
    type = "text",
    maxLength,
    autoFocus = false,
    placeholder,
    showErrorMsg = true,
    name,
    className,
    labelStyle,
    inputStyle,
    ...rest
  } = props;

  const [, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className={twMerge(clsx("flex flex-col w-full", className))}>
      {label && (
        <label
          className={twMerge(
            clsx(
              "font-[500] text-lightGrey2 text-sm leading-[20px] capitalize",
              labelStyle
            )
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <Field name={name} id={name}>
        {({ field }) => (
          <input
            ref={ref}
            prefix={prefix}
            className={twMerge(
              clsx(
                "text-sm rounded-lg font-medium bg-gray-200 placeholder:text-dark placeholder:text-sm placeholder:font-medium w-full px-3.5 py-2.5 mt-1.5 placeholder:opacity-70 shadow-none focus:shadow-none border border-transparent",
                inputStyle,
                !showErrorMsg && hasError && "border-red-700",
                showErrorMsg && "border-none"
              )
            )}
            type={type}
            maxLength={maxLength}
            placeholder={placeholder}
            {...field}
            {...rest}
            autoFocus={autoFocus}
          />
        )}
      </Field>
      {showErrorMsg && <ErrorMessage name={name} component={ErrorMsg} />}
    </div>
  );
});

export default CustomInput;
