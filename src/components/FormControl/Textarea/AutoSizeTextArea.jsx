import React, { useEffect, useState } from "react";
import { ErrorMessage, Field } from "formik";
import ErrorMsg from "../../ErrorMessage";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const AutoSizeTextarea = ({
  placeholder,
  height,
  label,
  id,
  name,
  className,
  labelStyle,
  inputStyle,
  valueByFormik,
  rows: minRows = 4,
  ...props
}) => {
  const [rows, setRows] = useState(minRows);
  const [value, setValue] = useState("");

  useEffect(() => {
    const rowlen = value.split("\n");

    if (rowlen.length > minRows) {
      setRows(rowlen.length);
    }

    if (rowlen.length <= minRows) {
      setRows(minRows);
    }
  }, [value]);

  useEffect(() => {
    if (!valueByFormik) {
      setRows(minRows);
    }
  }, [valueByFormik]);

  return (
    <div className={twMerge(clsx("mt-4", className && className))}>
      {label && (
        <label
          htmlFor={id}
          className={twMerge(
            clsx(
              "font-[500] text-lightGrey2 leading-[20px] capitalize",
              labelStyle && labelStyle,
            ),
          )}
        >
          {label}
        </label>
      )}

      <Field name={name}>
        {({ form: { values, setFieldValue }, meta }) => (
          <div>
            <textarea
              name={name}
              className={twMerge(
                clsx(
                  "block resize-none p-2.5 mt-2 text-sm text-gray-900  rounded-lg border placeholder:text-dark placeholder:text-opacity-40 placeholder:font-medium bg-whiteSmoke w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500",
                  inputStyle && inputStyle,
                ),
              )}
              type="text"
              value={values[name]}
              autoFocus
              rows={rows}
              placeholder={placeholder}
              onChange={(e) => {
                const newValue = e.target.value;
                setValue(newValue);
                setFieldValue(name, newValue);
              }}
              {...props}
            />
            {meta.touched && meta.error && (
              <ErrorMessage name={name} component={ErrorMsg} />
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default AutoSizeTextarea;
