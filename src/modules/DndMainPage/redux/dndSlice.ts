// import { IStudentState, IStudent } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IData, IStudent, IUpdateStudent, IStudentState, IColumn } from '../types'
import { fetchAllStudents } from './asyncActions'

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
    // changeStatus: (state, action) => {
    //   state.
    // },
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
  },
  
})

export const { reset } = dndSlice.actions
export default dndSlice.reducer
