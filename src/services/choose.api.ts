import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL + "api/",
});

export const apiChoose = createApi({
  reducerPath: "apiChoose",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getChooseById: builder.query<IChoose, string>({
      query: (id) => `chooses/${id}`,
    }),
    getChooses: builder.query({
      query: () => "chooses",
    }),
    createChoose: builder.mutation({
      query: (newChoose) => ({
        url: "chooses",
        method: "POST",
        body: newChoose,
      }),
    }),
    updateChoose: builder.mutation({
      query: (updatedChoose) => ({
        url: `chooses/${updatedChoose.get("id")}`,
        method: "PUT",
        body: updatedChoose,
      }),
    }),
    patchChoose: builder.mutation<IChoose, Partial<IChoose>>({
      query: (updatedChoose) => ({
        url: `chooses/${updatedChoose.id}`,
        method: "PATCH",
        body: updatedChoose,
      }),
    }),
    deleteChoose: builder.mutation<IChoose, Partial<IChoose>>({
      query: (id) => ({
        url: `chooses/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetChooseByIdQuery,
  useGetChoosesQuery,
  useCreateChooseMutation,
  useUpdateChooseMutation,
  usePatchChooseMutation,
  useDeleteChooseMutation,
} = apiChoose;
