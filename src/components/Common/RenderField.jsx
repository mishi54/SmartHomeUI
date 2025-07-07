import React from "react";
import { Field, ErrorMessage } from "formik";

const RenderField = ({ label, name, placeholder, type = "text", as = "input", options = [] }) => {
  return (
    <div>
      <label className="block font-medium mb-1" htmlFor={name}>
        {label}
      </label>

      {as === "select" ? (
        <Field
          as="select"
          name={name}
          id={name}
          className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
        >
          <option value="" className="bg-gray-100">Select</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          as={as}
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
        />
      )}

      <ErrorMessage name={name} component="div" className="text-sm text-red-500 mt-1" />
    </div>
  );
};

export default RenderField;
