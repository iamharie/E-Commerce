import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
  id: number;
  category: string;
  brand: string;
  name: string;
  price: number;
  description: string;
  releaseDate: string;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<Product[], void>({
      query: () => "/products",
      keepUnusedDataFor: 200,
    }),

    fetchPostId: builder.query<Product, number>({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useFetchPostsQuery, useFetchPostIdQuery } = api;
