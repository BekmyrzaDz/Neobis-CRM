// import { IStudentState, IStudent } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllStudents } from './asyncActions'

interface IDepartment {
  name: string
}
interface IPaymentMethod {
  name: string
}

interface IStatus {
  name: string
}

interface ISource {
  name: string
}

interface IReason {
  name: string
}

interface IStudent {
  time: string
  id: number
  first_name: string
  last_name: string
  surname?: string
  notes?: string
  phone: string
  laptop?: boolean
  department: IDepartment
  came_from: ISource
  payment_method?: IPaymentMethod
  status?: IStatus
  paid: boolean
  reason: IReason
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
      .addCase(getAllStudents.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getAllStudents.fulfilled,
        (state, action: PayloadAction<IStudent[]>) => {
          state.isLoading = false
          state.isSuccess = true
          state.student = action.payload
        }
      )
      .addCase(getAllStudents.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.student = null
      })
  },
})

export default dndSlice.reducer
