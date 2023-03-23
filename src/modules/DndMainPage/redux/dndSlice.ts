// import { IStudentState, IStudent } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchAllStudents } from './asyncActions'

interface IDepartment {
  id: number
  name: string
}
interface IPaymentMethod {
  id: number
  name: string
}

interface IStatus {
  id: number
  name: string
}

interface ISource {
  id: number
  name: string
}

interface IReason {
  id: number
  name: string
}

interface IStudent {
  time?: string
  id: number
  first_name: string
  last_name: string
  surname?: string
  notes: string
  phone: string
  laptop: boolean
  department: IDepartment
  came_from: ISource
  payment_method?: IPaymentMethod
  status?: IStatus
  paid: boolean
  reason?: IReason
  on_request: boolean
}

export interface IStudentState {
  student: IStudent[] | null
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

const initialState: IStudentState = {
  student: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const dndSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudents.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchAllStudents.fulfilled,
        (state, action: PayloadAction<IStudent[]>) => {
          state.isLoading = false
          state.isSuccess = true
          state.student = action.payload
        }
      )
      .addCase(fetchAllStudents.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.student = null
      })
  },
})

export default dndSlice.reducer
