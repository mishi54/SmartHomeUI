import { createApi } from "@reduxjs/toolkit/query/react";
import { base_url,reset_password, verify_otp,forgot_password } from "../../utils/apiUrls";
import { axiosBaseQuery } from "../../utils/axios";
export const passwordApi = createApi({
  reducerPath: "passwordApi",
  baseQuery: axiosBaseQuery({ baseUrl: base_url,
    credentials: "include",
   }),
  tagTypes: ["Password"],
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: forgot_password,
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: verify_otp,
        method: "POST",
        body: data,
        withCredentials: true,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: reset_password,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useForgotPasswordMutation, useVerifyOtpMutation, useResetPasswordMutation } = passwordApi;
