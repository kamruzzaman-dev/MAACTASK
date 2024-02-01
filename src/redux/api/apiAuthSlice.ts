import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiAuthSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://staging-api.erpxbd.com/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("maactask-accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["user", "area", "region"],
  endpoints: () => ({}),
});

export default apiAuthSlice;
