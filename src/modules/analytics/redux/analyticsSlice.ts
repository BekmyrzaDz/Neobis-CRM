import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  IInititalState,
  IPopularDepartment,
  IPopularSource,
  IRequestStatus,
} from '../types'
import {
  getPopularDepartment,
  getPopularSource,
  getRequestStatuses,
} from './asyncActions'

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
      .addCase(getPopularSource.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getPopularSource.fulfilled,
        (state, action: PayloadAction<IPopularSource[]>) => {
          state.isLoading = false
          state.popularSource = action.payload
        }
      )
      .addCase(getPopularSource.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.popularSource = []
      })
      .addCase(getPopularDepartment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getPopularDepartment.fulfilled,
        (state, action: PayloadAction<IPopularDepartment[]>) => {
          state.isLoading = false
          state.popularDepartment = action.payload
        }
      )
      .addCase(getPopularDepartment.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.popularDepartment = []
      })
  },
})

export default analyticsSlice.reducer
