import apiAuthSlice from "../apiAuthSlice";

const areaApi = apiAuthSlice.injectEndpoints({
  endpoints: (builder) => ({
    addArea: builder.mutation({
      query: (data) => ({
        url: "/area",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["area"],
    }),
    getAllArea: builder.query({
      query: ({ limit, page }) => ({
        url: `/area/All/${limit}/${page}`,
      }),
      providesTags: ["area"],
    }),
  }),
});

export const { useAddAreaMutation, useGetAllAreaQuery } = areaApi;
