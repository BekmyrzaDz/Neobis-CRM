import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICreateStudent, ICreateStudentState,  } from '../types'
import { createStudent } from './addClientActions'

const initialState: ICreateStudentState = {
  newClient: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const createStudentSlice = createSlice({
  name: 'addClient',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        createStudent.fulfilled,
        (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.newClient = action.payload as ICreateStudent
        }
      )
      .addCase(createStudent.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.newClient = null
      })
  },
})

export default createStudentSlice.reducer
