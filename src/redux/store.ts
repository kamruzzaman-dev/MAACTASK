import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import apiAuthSlice from "./api/apiAuthSlice";
export const store = configureStore({
  reducer: {
    [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiAuthSlice.middleware),
});

setupListeners(store.dispatch);
