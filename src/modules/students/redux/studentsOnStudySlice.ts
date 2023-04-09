import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStudentOnStudy, IStudentOnStudyState } from '../types'
import {
  createStudentOnStudy,
  editStudentOnStudyById,
  getStudentOnStudyById,
  getStudentsOnStudy,
} from './asyncActions'

const initialState: IStudentOnStudyState = {
  studentsOnStudy: [],
  studentOnStudy: {},
  isLoading: false,
  isError: false,
}

export const studentsOnStudySlice = createSlice({
  name: 'studentsOnStudy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsOnStudy.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getStudentsOnStudy.fulfilled,
        (state, action: PayloadAction<IStudentOnStudy[]>) => {
          state.isLoading = false
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
          state.studentOnStudy = action.payload
        }
      )
      .addCase(createStudentOnStudy.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.studentOnStudy = {}
      })
      .addCase(getStudentOnStudyById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getStudentOnStudyById.fulfilled,
        (state, action: PayloadAction<IStudentOnStudy>) => {
          state.isLoading = false
          state.studentOnStudy = action.payload
        }
      )
      .addCase(getStudentOnStudyById.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.studentOnStudy = {}
      })
      .addCase(editStudentOnStudyById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        editStudentOnStudyById.fulfilled,
        (state, action: PayloadAction<IStudentOnStudy>) => {
          state.isLoading = false
          state.studentOnStudy = action.payload
        }
      )
      .addCase(editStudentOnStudyById.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.studentOnStudy = {}
      })
  },
})

export default studentsOnStudySlice.reducer
