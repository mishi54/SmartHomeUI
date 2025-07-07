import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../../ErrorMessage";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import ReactSelect from "react-select";
import styled from "styled-components";

const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;

  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="p-2 hover:bg-gray-100 cursor-pointer"
    >
      <div className="font-medium text-gray-900">{data.label}</div>
      {data.description && (
        <div className="text-sm text-gray-500">{data.description}</div>
      )}
    </div>
  );
};

const CustomMultiSelect = (props) => {
  const {
    name,
    placeholder,
    className,
    label,
    labelStyling,
    selectInputStyle,
    defaultValue = [],
    options,
    onChange = () => {},
    isLoading,
    ...rest
  } = props;

  const getSelectedOptions = (values = [], options = []) => {
    return options.filter((opt) => values.includes(opt.value));
  };

  return (
    <div className={twMerge(clsx("mt-5", className))}>
      {label && (
        <label
          className={twMerge(
            clsx(
              "font-[500] text-lightGrey2 text-sm leading-[20px] capitalize",
              labelStyling && labelStyling
            )
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <MultiSelectWrapper className="relative mt-2">
        <Field name={name} id={name} {...rest}>
          {({ form }) => (
            <ReactSelect
              isLoading={isLoading}
              isMulti
              name={name}
              placeholder={placeholder}
              options={options}
              value={getSelectedOptions(form.values[name], options)}
              onChange={(selectedOptions) => {
                const values = selectedOptions.map((opt) => opt.value);
                form.setFieldValue(name, values);
                onChange(values);
              }}
              components={{ Option: CustomOption }} 
              className={twMerge(
                clsx(
                  "font-poppin basic-multi-select border-none font-medium text-gray-900 text-sm rounded-lg :placeholder-opacity-40 block w-full appearance-none cursor-pointer",
                  selectInputStyle && selectInputStyle
                )
              )}
              classNamePrefix="select"
            />
          )}
        </Field>
      </MultiSelectWrapper>
      <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  );
};

export default CustomMultiSelect;

const MultiSelectWrapper = styled.div`
  .select__control {
    background: transparent;
    border: none;
    padding: 3.5px 0;
    border-radius: 8px;
    background-color: #e5e7eb;
  }
`;
