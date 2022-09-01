import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'utils/apiUtil'
import { productsUrl } from 'constants/urls'

export interface Response { }

export interface QueryParams {
  id: number;
}


export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_GATEWAY_URL }),
  keepUnusedDataFor: 0,
  endpoints: (build) => ({
    getProductById: build.query<any, QueryParams>({
      query: ({ id }) => ({
        url: `${productsUrl}/${id}`,
        method: 'get',
      }),
      transformResponse(response: Response) {
        return response
      },
    }),
  })
})

export const { useGetProductByIdQuery } = productsApi
