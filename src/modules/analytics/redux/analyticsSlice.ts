import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInititalState, IRequestStatus } from '../types'
import { getRequestStatuses } from './asyncActions'

const initialState: IInititalState = {
  requestStatus: [],
  popularSource: [],
  popularDepartment: [],
  leavingReason: [],
  isLoading: false,
  isError: false,
}

export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRequestStatuses.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getRequestStatuses.fulfilled,
        (state, action: PayloadAction<IRequestStatus[]>) => {
          state.isLoading = false
          state.requestStatus = action.payload
        }
      )
      .addCase(getRequestStatuses.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.requestStatus = []
      })
  },
})

export default analyticsSlice.reducer
