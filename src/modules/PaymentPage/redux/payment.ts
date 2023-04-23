import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../../../store/store"
import { IStudent } from "../types"

interface IPaymentResponse {
  id: number
  full_name: string
}

interface IGroupState {
  id: number
  name: string
  mentor: {
    id: number
    first_name: string
    last_name: string
    image: string
  }
  department: {
    name: string
  }
  students_max: string
  schedule_type: number
  classroom: {
    id: number
    name: string
  }
  is_archive: boolean
  start_at_date: string
  end_at_date: string
  start_at_time: string
  end_at_time: string
  current_students: string
}

interface IPayment {
  id: number
  client_card: {
    fio: string
    payment_status: number
  }
  course: {
    name: string
  }
  payment_type: {
    id: number
    name: string
  }
  last_payment_date: string
  payment_time: string
  amount: string
  acceptBy: string
}

export const paymentApi = createApi({
  reducerPath: "paymentApi/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://64.226.89.72",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.user?.access

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: (build) => ({
    searchStudents: build.query<IPaymentResponse[], string>({
      query: (search: string) => ({
        url: `api/payment-search/${search}/`,
        method: "GET",
      }),
    }),
    getAllStudents: build.query<IPayment[], void>({
      query: () => ({
        url: `api/payments/`,
        method: "GET",
      }),
    }),
    searchGroups: build.query<IGroupState[], string>({
      query: (search: string) => ({
        url: `api/payment-search-group/${search}/`,
        method: "GET",
      }),
    }),
    getStudentById: build.query<IStudent, number>({
      query: (id: number) => ({
        url: `api/students/${id}/`,
        method: "GET",
      }),
    }),
    getGroupById: build.query<IGroupState, number>({
      query: (id: number) => ({
        url: `api/groups/${id}/`,
        method: "GET",
      }),
    }),
    getProfileById: build.query<any, number>({
      query: (id: number) => ({
        url: `api/profiles/${id}/`,
        method: "GET",
      }),
    }),
  }),
})

export const {
  useSearchStudentsQuery,
  useLazyGetStudentByIdQuery,
  useSearchGroupsQuery,
  useLazyGetGroupByIdQuery,
  useGetAllStudentsQuery,
  useGetProfileByIdQuery,
} = paymentApi
