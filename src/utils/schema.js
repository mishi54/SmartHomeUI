import * as Yup from "yup";
 export const signupinitialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignupSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email should be valid"),
  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(6, "Must be at least 6 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(
      /[@/!()*]/,
      "Must contain at least one special character (@/!()* )"
    ),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
        role:Yup.string().required("Role is required"),
    
});


export const logininitialValues = {
  email: "",
  password: "",
};


export const validationSchema = Yup.object({
  otp: Yup.string()
    .length(6, "OTP must be exactly 6 characters long") 
    .required("OTP is required"),
      password: Yup.string()
    .trim()
    .required("Password is required")
    .min(6, "Must be at least 6 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(
      /[@/!()*]/,
      "Must contain at least one special character (@/!()* )"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Confirm password is required")

});


export const LoginSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Email should be valid"),
  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(6, "Minimum six character is required"),
});
