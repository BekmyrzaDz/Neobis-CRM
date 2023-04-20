// import { IStudentState, IStudent } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IData, IStudent, IUpdateStudent, IStudentState, IColumn } from '../types'
import { createPayment, deleteStudentByIdForAnalytics, detailEditStudentById } from './asyncActions'

const initialState: IStudentState = {
  newStudent: null,
  payment: null,
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
      .addCase(createPayment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        createPayment.fulfilled,
        (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          // state.payment = action.payload
      })
      .addCase(createPayment.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.newStudent = null
      })
      .addCase(detailEditStudentById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        detailEditStudentById.fulfilled,
        (state, action: PayloadAction<IStudent>) => {
          state.isLoading = false
          state.isSuccess = true
          state.newStudent = action.payload
      })
      .addCase(detailEditStudentById.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.newStudent = null
      })
      .addCase(deleteStudentByIdForAnalytics.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        deleteStudentByIdForAnalytics.fulfilled,
        (state) => {
          state.isLoading = false
          state.isSuccess = true
      })
      .addCase(deleteStudentByIdForAnalytics.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.newStudent = null
      })
  },
  
})

export const { reset } = detailViewSlice.actions
export default detailViewSlice.reducer
