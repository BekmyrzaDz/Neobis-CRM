// import { IStudentState, IStudent } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IData, IStudent, IUpdateStudent, IStudentState, IColumn } from '../types'
import { fetchAllStudents, fetchDetailUpdateStudent, fetchStudentById } from './asyncActions'

const initialState: IStudentState = {
  student: [],
  newStudent: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const dndSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
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
      })
      .addCase(fetchAllStudents.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.student = null
      })
      .addCase(fetchStudentById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchStudentById.fulfilled,
        (state, action: PayloadAction<IStudent>) => {
          state.isLoading = false
          state.isSuccess = true
          state.newStudent = action.payload
      })
      .addCase(fetchStudentById.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.newStudent = null
      })
  },
  
})

export const { reset } = dndSlice.actions
export default dndSlice.reducer
