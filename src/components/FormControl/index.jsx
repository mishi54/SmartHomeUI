import React from "react";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import Select from "./Select";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import MultiSelect from "./Select/Multi";
const FormControl = React.forwardRef((props, ref) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} ref={ref} />;
    case "password":
      return <PasswordInput {...rest} ref={ref} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "multiselect":
      return <MultiSelect {...rest} />;
    default:
      return null;
  }
});

FormControl.displayName = "FormControl"; 
export default FormControl;
