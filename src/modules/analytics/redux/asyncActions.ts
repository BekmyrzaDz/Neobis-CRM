import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import analyticsService from '../services/analyticsService'
import { IRequestStatus } from '../types'

// get request statuses
export const getRequestStatuses = createAsyncThunk<
  IRequestStatus[],
  string,
  { rejectValue: string }
>('analytics/getRequestStatuses', async (token, thunkAPI) => {
  try {
    const response = await analyticsService.getRequestStatuses(token)
    return response
  } catch (error: unknown) {
    if (typeof error === 'string') {
      toast.error(error)
      return thunkAPI.rejectWithValue(error)
    }
    if (error instanceof AxiosError) {
      const message =
        error.response?.data?.detail ||
        (error.response &&
          error.response?.data &&
          error.response?.data?.message) ||
        error.message ||
        error.toString()
      toast.error(message)
      return thunkAPI.rejectWithValue(message)
    }
    throw error
  }
})