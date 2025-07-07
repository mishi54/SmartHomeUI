import { Formik, Form } from "formik";
import { useForgotPasswordMutation } from "../../../redux/api/resetpassword";
import { useNavigate } from "react-router-dom";
import AuthCaption from "../Components/Caption";
import PrimaryHeading from "../../../components/Typography/Headings/Primary";
import Description from "../../../components/Typography/Description";
import Logos from "../../../components/Logo";
import RenderField from "../../../components/Common/RenderField";
import CustomButton from "../../../components/Custom/Button";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Email should be valid"),
});

const ForgotPassword = () => {
  const [forgotPassword, { isLoading, error }] = useForgotPasswordMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await forgotPassword({
         email: values.email.toLowerCase()}).unwrap();
      sessionStorage.setItem("forgotPasswordEmail", values.email);
      navigate("/verify-otp");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
 <>
   <div className="mt-6 text-center">
          <AuthCaption
            title="Already have an account?"
            action="Login"
            link="/login"
          />
        </div>
  <div className="flex flex-col min-h-screen justify-center items-center px-4">
    <div className="w-full max-w-md">
      <div className="flex flex-col gap-y-4">
        <Logos />

        <PrimaryHeading text="Forgot Password" className="mt-0 mb-4" />

        <Description
          text="Enter your email to receive an OTP."
          className="mt-1 text-opacity-70 text-md"
        />

        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="flex flex-col gap-y-4 mt-2 mb-7">
              <RenderField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />

              <CustomButton
                text="Send OTP"
                isLoading={isLoading}
                loadingText="Submitting"
                type="submit"
                className="bg-primary text-white p-3 rounded-md mt-1"
              />
            </Form>
          )}
        </Formik>

     
      </div>
    </div>
  </div>
</>


  );
};

export default ForgotPassword;
