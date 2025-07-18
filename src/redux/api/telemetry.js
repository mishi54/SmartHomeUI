import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utils/axios";
import { base_url } from "../../utils/ApiUrls";
export const telemetryApi = createApi({
  reducerPath: "telemetryApi",
  baseQuery: axiosBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getDeviceSummary: builder.query({
      query: () => ({
        url: "telemetry/summary",
        method: "GET",
      }),
    }),
    getDeviceData: builder.query({
      query: (deviceId) => ({
        url: `telemetry/${deviceId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDeviceSummaryQuery, useGetDeviceDataQuery } = telemetryApi;
