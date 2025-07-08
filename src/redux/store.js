import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { passwordApi } from "./api/resetpassword";
import { telemetryApi } from "./api/telemetry";
import { chatApi } from "./api/chat";
const store = configureStore({
  reducer: {
        password: passwordApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
     [telemetryApi.reducerPath]: telemetryApi.reducer, 
     [chatApi.reducerPath]: chatApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      authApi.middleware,
      passwordApi.middleware,
       telemetryApi.middleware, 
       chatApi.middleware,
    ]),
});

export default store;
