import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL + "api/",
});

export const apiCapitalFunded = createApi({
  reducerPath: "apiCapitalFunded",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getCapitalFundedById: builder.query<{ data: ICapitalFunded }, string>({
      query: (id) => `capital-funded/${id}`,
    }),
    getCapitalFundeds: builder.query({
      query: () => "capital-funded",
    }),
    createCapitalFunded: builder.mutation({
      query: (newData) => ({
        url: "capital-funded",
        method: "POST",
        body: newData,
      }),
    }),
    updateCapitalFunded: builder.mutation({
      query: (updatedData) => ({
        url: `capital-funded/${updatedData.get("id")}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
    patchCapitalFunded: builder.mutation<
      ICapitalFunded,
      Partial<ICapitalFunded>
    >({
      query: (updatedData) => ({
        url: `capital-funded/${updatedData.id}`,
        method: "PATCH",
        body: updatedData,
      }),
    }),
    deleteCapitalFunded: builder.mutation<ICapitalFunded, string>({
      query: (id) => ({
        url: `capital-funded/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCapitalFundedByIdQuery,
  useGetCapitalFundedsQuery,
  useCreateCapitalFundedMutation,
  useUpdateCapitalFundedMutation,
  usePatchCapitalFundedMutation,
  useDeleteCapitalFundedMutation,
} = apiCapitalFunded;
