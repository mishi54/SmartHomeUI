import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { passwordApi } from "./api/resetpassword";
import { telemetryApi } from "./api/telemetry";
const store = configureStore({
  reducer: {
        password: passwordApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
     [telemetryApi.reducerPath]: telemetryApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      authApi.middleware,
      passwordApi.middleware,
       telemetryApi.middleware, 
    ]),
});

export default store;
