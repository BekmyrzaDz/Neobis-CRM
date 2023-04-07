import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStudentOnStudy, IStudentOnStudyState } from '../types'
import { createStudentOnStudy, getStudentsOnStudy } from './asyncActions'

const initialState: IStudentOnStudyState = {
  studentsOnStudy: [],
  studentOnStudy: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const studentsOnStudySlice = createSlice({
  name: 'studentsOnStudy',
  initialState,
  reducers: {
    studentsOnStudyReset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsOnStudy.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getStudentsOnStudy.fulfilled,
        (state, action: PayloadAction<IStudentOnStudy[]>) => {
          state.isLoading = false
          state.isSuccess = true
          state.studentsOnStudy = action.payload
        }
      )
      .addCase(getStudentsOnStudy.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.studentsOnStudy = []
      })
      .addCase(createStudentOnStudy.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        createStudentOnStudy.fulfilled,
        (state, action: PayloadAction<IStudentOnStudy>) => {
          state.isLoading = false
          state.isSuccess = true
          state.studentOnStudy = action.payload
        }
      )
      .addCase(createStudentOnStudy.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.studentOnStudy = {}
      })
  },
})

export const { studentsOnStudyReset } = studentsOnStudySlice.actions
export default studentsOnStudySlice.reducer
