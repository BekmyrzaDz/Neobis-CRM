// import { IStudentState, IStudent } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IData, IStudent, IUpdateStudent, IStudentState, IColumn } from '../types'
import { fetchAllStudents, fetchDeleteStudent, fetchDetailUpdateStudent, fetchStudentById } from './asyncActions'

const initialState: IStudentState = {
  newStudent: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const detailViewSlice = createSlice({
  name: 'singleClient',
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
      .addCase(fetchDetailUpdateStudent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchDetailUpdateStudent.fulfilled,
        (state, action: PayloadAction<IStudent>) => {
          state.isLoading = false
          state.isSuccess = true
          state.newStudent = action.payload
      })
      .addCase(fetchDetailUpdateStudent.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.newStudent = null
      })
      .addCase(fetchDeleteStudent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchDeleteStudent.fulfilled,
        (state, action: PayloadAction<IStudent>) => {
          state.isLoading = false
          state.isSuccess = true
          state.newStudent = action.payload
      })
      .addCase(fetchDeleteStudent.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.newStudent = null
      })
  },
  
})

export const { reset } = detailViewSlice.actions
export default detailViewSlice.reducer
