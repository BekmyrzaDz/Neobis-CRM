import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICreateStudent, ICreateStudentState,  } from '../types'
import { fetchCreateStudent } from './addClientActions'

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
      .addCase(fetchCreateStudent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchCreateStudent.fulfilled,
        (state, action: PayloadAction<ICreateStudent>) => {
          state.isLoading = false
          state.isSuccess = true
          state.newClient = action.payload
        }
      )
      .addCase(fetchCreateStudent.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.newClient = null
      })
  },
})

export default createStudentSlice.reducer
