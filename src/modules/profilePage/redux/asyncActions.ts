import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { AxiosError } from 'axios'
import { IProfile, IUpdateAvatarData, IUpdateProfileData } from '../types'
import profileService from '../services/profileService'

// getProfileById Action
export const getProfileById = createAsyncThunk<
  IProfile,
  number,
  { rejectValue: string }
>('profile/getProfileById', async (id: number, thunkAPI) => {
  try {
    const response = await profileService.getProfileById(id)
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

// getProfileById Action
export const updateProfile = createAsyncThunk<
  IProfile,
  IUpdateProfileData,
  { rejectValue: string }
>('profile/updateProfile', async ({ id, profileData }, thunkAPI) => {
  try {
    const response = await profileService.updateProfile({ id, profileData })
    return response
  } catch (error: unknown) {
    if (typeof error === 'string') {
      toast.error(error)
      return thunkAPI.rejectWithValue(error)
    }
    if (error instanceof AxiosError) {
      const message =
        error.response?.data.detail ||
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

// getProfileById Action
export const updateAvatar = createAsyncThunk<
  IProfile,
  IUpdateAvatarData,
  { rejectValue: string }
>('profile/updateAvatar', async ({ id, file }, thunkAPI) => {
  try {
    const response = await profileService.updateAvatar({ id, file })
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
