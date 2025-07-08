
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utils/axios";
import { base_url } from "../../utils/ApiUrls";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: axiosBaseQuery({ baseUrl: base_url }),
  tagTypes: ["Chat"],
  endpoints: (builder) => ({
    chatAssistant: builder.mutation({
      query: (data) => ({
        url: "chat",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useChatAssistantMutation } = chatApi;
