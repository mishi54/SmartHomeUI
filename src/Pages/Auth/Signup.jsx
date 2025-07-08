import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quinaryHeading } from "../../global/TailwindVariables";
import CustomButton from "../../components/Custom/Button";
import FormControl from "../../components/FormControl";
import { Form, Formik } from "formik";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import AuthCaption from "./Components/Caption";
import Logos from "../../components/Logo";
import PrimaryHeading from "../../components/Typography/Headings/Primary";
import Description from "../../components/Typography/Description";
import { useRegisterMutation } from "../../redux/api/auth";
import { auth_token_key } from "../../utils/ApiUrls";
import { useDispatch } from "react-redux";
import { SignupSchema, signupinitialValues } from "../../utils/schema";
import { setUser } from "../../redux/slices/User";

const Signup = () => {
  const navigate = useNavigate();
  const [registerHandler] = useRegisterMutation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const registerValues = { ...values };
      delete registerValues.terms;
      const response = await registerHandler({
        ...registerValues,
        email: registerValues.email.toLowerCase(),
      }).unwrap();
      if (response?.status === 200) {
        dispatch(setUser(response?.data?.user));
        localStorage.setItem(auth_token_key, response.data?.token);
        navigate("/dashboard");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
<>
      <div className="flex-shrink-0 mt-7 mb-1">
        <AuthCaption
          title="Already have an account?"
          action="Login"
          link="/login"
        />
      </div>
      <Logos />
      <div className="flex flex-col min-h-screen justify-center">
      <div className="sm:mt-8">
        <div className="flex-1 flex h-full flex-col justify-center mb-4">
          <PrimaryHeading text="Register" />
        </div>
        <Description
          text="Enter the details below to continue"
          className="mt-2 text-opacity-70 text-md"
        />
        <Formik
          initialValues={signupinitialValues}
          validationSchema={SignupSchema}
          onSubmit={submitHandler}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mt-6">
                <FormControl
                  control="input"
                  label="Name"
                  type="text"
                  name="name"
                  labelStyle="text-md"
                  placeholder="Enter Name"
                />
                <FormControl
                  control="input"
                  label="email"
                  type="email"
                  name="email"
                  labelStyle="text-md"
                  placeholder="Enter Your Email"
                  className="mt-6"
                />
                <FormControl
                  control="password"
                  label="password"
                  name="password"
                  labelStyle="text-md"
                  placeholder="Enter Your Password"
                />
                <FormControl
                  control="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  labelStyle="text-md"
                  placeholder="Enter Your Password Again"
                />
                 <FormControl
                          control="select"
                          name="role"
                          label="Role"
                           labelStyle="text-md"
                          placeholder="Select role"
                           className="mt-5"
                          options={[
                            { key: "user", value: "User" },
                            { key: "admin", value: "Admin" },
                          ]}
                         
                         />
              </div>
              <CustomButton
                text="Signup"
                isLoading={loading}
                loadingText="Submitting..."
                type="submit"
                className="p-3 my-4 bg-primary text-white text-md"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>
  );
};

export default Signup;
