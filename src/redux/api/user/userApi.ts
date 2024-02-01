import apiAuthSlice from "../apiAuthSlice";

const userApi = apiAuthSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/users/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = userApi;
