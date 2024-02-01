import apiAuthSlice from "../apiAuthSlice";

const regionApi = apiAuthSlice.injectEndpoints({
  endpoints: (builder) => ({
    addRegion: builder.mutation({
      query: (data) => ({
        url: "/region",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["region"],
    }),
    getAllRegion: builder.query({
      query: ({ limit, page }) => ({
        url: `/region/${limit}/${page}`,
      }),
      providesTags: ["region"],
    }),
  }),
});

export const { useAddRegionMutation, useGetAllRegionQuery } = regionApi;
