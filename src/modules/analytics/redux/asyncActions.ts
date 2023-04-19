import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import analyticsService from '../services/analyticsService'
import {
  ILeavingReason,
  IPopularDepartment,
  IPopularSource,
  IRequestStatus,
} from '../types'

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

// get popular source
export const getPopularSource = createAsyncThunk<
  IPopularSource[],
  string,
  { rejectValue: string }
>('analytics/getPopularSource', async (token, thunkAPI) => {
  try {
    const response = await analyticsService.getPopularSource(token)
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

// get popular department
export const getPopularDepartment = createAsyncThunk<
  IPopularDepartment[],
  string,
  { rejectValue: string }
>('analytics/getPopularDepartment', async (token, thunkAPI) => {
  try {
    const response = await analyticsService.getPopularDepartment(token)
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

// get popular department
export const getLeavingReason = createAsyncThunk<
  ILeavingReason[],
  string,
  { rejectValue: string }
>('analytics/getLeavingReason', async (token, thunkAPI) => {
  try {
    const response = await analyticsService.getLeavingReason(token)
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
