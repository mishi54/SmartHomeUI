import React, { useState } from "react";
import CustomButton from "../../components/Custom/Button";
import FormControl from "../../components/FormControl";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import AuthCaption from "./Components/Caption";
import PrimaryHeading from "../../components/Typography/Headings/Primary";
import Description from "../../components/Typography/Description";
import Logos from "../../components/Logo";
import { useLoginMutation } from "../../redux/api/auth";
import { auth_token_key } from "../../utils/ApiUrls";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/User";
import { LoginSchema, logininitialValues } from "../../utils/schema";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginHandler] = useLoginMutation();
  const [loginAttempts, setLoginAttempts] = useState(1);
  const [loading, setLoading] = useState(false); 

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  const attempIncrementHandler = () => setLoginAttempts((prev) => prev + 1);

  const submitHandler = async (values) => {
    setLoading(true); 
    try {
      const response = await loginHandler({
        ...values,
        attempt: loginAttempts,
        email: values.email.toLowerCase(),
      }).unwrap();

      if (response?.status === 200) {
        const token = response?.data?.token;
        dispatch(setUser(response?.data?.user));
        localStorage.setItem(auth_token_key, token);
        navigate("/dashboard");
      }
    } catch (error) {
      attempIncrementHandler();
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
       <div className="flex-shrink-0 mt-7">
        <AuthCaption />
      </div>
      <div className=" flex flex-col min-h-screen justify-center">
   
      <div className="flex flex-col gap-y-4">
        <Logos />
        <div className="flex-1 flex h-full flex-col justify-center">
          <PrimaryHeading text="Login" className="mt-0" />
        </div>
        <Description
          text="Enter the details below to continue"
          className="mt-2 text-opacity-70 text-md"
        />
        <Formik
          initialValues={logininitialValues}
          validationSchema={LoginSchema}
          onSubmit={submitHandler}
          
        >
          {({ handleSubmit, setFieldValue, values: { email } }) => (
            <Form className="mt-0" onSubmit={handleSubmit}>
              <FormControl
                control="input"
                label="email"
                type="email"
                labelStyle="text-md"
                name="email"
                value={email}
                onChange={(e) => {
                  setFieldValue("email", e.target.value);
                  setLoginAttempts(1);
                }}
                placeholder="Enter Your Email"
              />
              <FormControl
                control="password"
                label="password"
                labelStyle="text-md"
                name="password"
                placeholder="Enter Your Password"
              />
              <div className="flex justify-end w-full mt-3">
                <Description
                  className="text-primary font-semibold cursor-pointer hover:underline text-md"
                  text="Forgot Password?"
                  onClick={handleForgotPasswordClick}
                />
              </div>

                <CustomButton
                  text="Login"
                  isLoading={loading}
                  loadingText="Submit"
                  type="submit"
                  className="p-3 mt-8 bg-primary text-white text-md"
                />
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>
  );
};

export default Login;
