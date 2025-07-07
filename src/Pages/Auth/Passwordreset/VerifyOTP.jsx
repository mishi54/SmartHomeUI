import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  useVerifyOtpMutation,
  useResetPasswordMutation,
} from "../../../redux/api/resetpassword";

import FormControl from "../../../components/FormControl";
import CustomButton from "../../../components/Custom/Button";
import AuthCaption from "../Components/Caption";
import PrimaryHeading from "../../../components/Typography/Headings/Primary";
import Description from "../../../components/Typography/Description";
import Logos from "../../../components/Logo";

import { validationSchema } from "../../../utils/schema";

const VerifyOtp = () => {
  const [verifyOtp, { isLoading: verifying }] = useVerifyOtpMutation();
  const [resetPassword, { isLoading: resetting }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const passwordRef = useRef(null);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await verifyOtp({ otp: values.otp }).unwrap();
      await resetPassword({
        password: values.password,
        confirmPassword: values.confirmPassword,
      }).unwrap();

      console.log("Password reset successful!");
      sessionStorage.removeItem("forgotPasswordEmail");
      navigate("/login");
    } catch (err) {
      console.error("Error during OTP verification or password reset:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen px-4 py-10 max-w-md mx-auto">
      <AuthCaption
        title="Already have an account?"
        action="Login"
        link="/login"
      />
      <Logos />

      <div className="flex-1 flex flex-col justify-center mt-0">
        <PrimaryHeading text="Reset Password" />
        <Description
          text="Enter the OTP sent to your email, then reset your password."
          className="mt-2 text-opacity-70 text-md"
        />

        <Formik
          initialValues={{ otp: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            setFieldValue,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit} className="mt-1 space-y-7">
              <FormControl
                control="input"
                label="OTP"
                type="text"
                name="otp"
                value={values.otp}
                onChange={(e) => {
                  const { value } = e.target;

                  if (/^\d{0,6}$/.test(value)) {
                    setFieldValue("otp", value);
                    if (value.length === 6) {
                      setTimeout(() => {
                        e.target.blur();
                        if (passwordRef.current) {
                          passwordRef.current.focus();
                        }
                      }, 800);
                    }
                  }
                }}
                placeholder="Enter OTP"
                labelStyle="text-md"
                inputStyle="font-medium placeholder:opacity-70 bg-gray-200"
              />

              <FormControl
                control="password"
                label="New Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter new password"
                labelStyle="text-md"
                inputStyle="font-medium placeholder:opacity-70 bg-gray-200"
                ref={passwordRef}
              />

              <FormControl
                control="password"
                label="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                labelStyle="text-md"
                inputStyle="font-medium placeholder:opacity-70 bg-gray-200"
              />

              <CustomButton
                text="Submit"
                isLoading={isSubmitting || verifying || resetting}
                loadingText="Submit"
                type="submit"
                className="p-3 bg-primary text-white text-md"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default VerifyOtp;
