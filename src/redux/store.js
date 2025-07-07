import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { passwordApi } from "./api/resetpassword";
const store = configureStore({
  reducer: {
        password: passwordApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      authApi.middleware,
      passwordApi.middleware,
    ]),
});

export default store;
