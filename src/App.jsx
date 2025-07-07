import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import AuthLayout from "@/Pages/Auth/Layout";
import Login from "@/Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/Passwordreset/ForgetPassword.jsx";
import VerifyOtp from "./Pages/Auth/Passwordreset/VerifyOTP.jsx";
import Signup from "@/Pages/Auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Pages/Not Found/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
      
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/verify-otp" element={<VerifyOtp />} />
        </Route>
    
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
