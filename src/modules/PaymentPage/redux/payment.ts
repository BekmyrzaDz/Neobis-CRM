import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../../../store/store"
import getToken from "../../../helpers/getToken"

export const paymentApi = createApi({
  reducerPath: "paymentApi/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://64.226.89.72",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.user?.access

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        // headers.set(getToken())
        headers.set("Authorization", `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: (build) => ({
    // searchUser: build.query<any, string>({
    //   query: (search: string) => ({
    //     url: "api/payment-search/",
    //     method: "POST",
    //     params: { search },
    //   }),
    // }),
    // searchUsers: build.mutation<any, string>({
    //   query: (search: any) => ({
    //     url: "api/payment-search/",
    //     method: "POST",
    //     body: search,
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   }),
    // }),
  }),
})

export const { useSearchUsersMutation } = paymentApi
