import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'utils/apiUtil'
import { productsUrl } from 'constants/urls'

export interface Response extends ProductType { }

export interface QueryParams {
  id: number;
}

type NotExistProductType = ''
interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export type ProductResult = ProductType | NotExistProductType | undefined

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_GATEWAY_URL }),
  keepUnusedDataFor: 0,
  endpoints: (build) => ({
    getProductById: build.query<ProductResult, QueryParams>({
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
