import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../services/authService'
import {
  IForgotPassword,
  ILogin,
  IResetPassword,
  IUser,
  IVerification,
} from '../types'
import { AxiosError } from 'axios'

// Login Action
export const login = createAsyncThunk<IUser, ILogin, { rejectValue: string }>(
  'auth/login',
  async (userData: ILogin, thunkAPI) => {
    try {
      const response = await authService.login(userData)
      if (response) {
        toast.success('Вы успешно вошли в систему')
      }
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
  }
)

// Reset Password Action
export const resetPassword = createAsyncThunk<
  string,
  IForgotPassword,
  { rejectValue: string }
>('auth/resetPassword', async (email: IForgotPassword, thunkAPI) => {
  try {
    const response = await authService.resetPassword(email)
    if (response) {
      toast.success(
        'Код подтверждения был отправлен на вашу электронную почту.'
      )
    }
    return response
  } catch (error: unknown) {
    if (typeof error === 'string') {
      toast.error(error)
      return thunkAPI.rejectWithValue(error)
    }
    if (error instanceof AxiosError) {
      const message =
        error.response?.data ||
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

// Verificcation code
export const verification = createAsyncThunk<
  string,
  IVerification,
  { rejectValue: string }
>('auth/verification', async ({ code, unique_id }: IVerification, thunkAPI) => {
  try {
    const response = await authService.verification({ code, unique_id })
    if (response) {
      toast.success('Проверка прошла успешно')
    }
    return response
  } catch (error: unknown) {
    if (typeof error === 'string') {
      toast.error(error)
      return thunkAPI.rejectWithValue(error)
    }
    if (error instanceof AxiosError) {
      const message =
        error.response?.data ||
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

// Set new password
export const setNewPassword = createAsyncThunk<
  string,
  IResetPassword,
  { rejectValue: string }
>(
  'auth/setNewPassword',
  async (
    { password, repeat_password, unique_id }: IResetPassword,
    thunkAPI
  ) => {
    try {
      const response = await authService.setNewPassword({
        password,
        repeat_password,
        unique_id,
      })
      if (response) {
        toast.success('Ваш пароль был успешно изменен.')
      }
      return response
    } catch (error: unknown) {
      if (typeof error === 'string') {
        toast.error(error)
        return thunkAPI.rejectWithValue(error)
      }
      if (error instanceof AxiosError) {
        const message =
          error.response?.data?.password[0] ||
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
  }
)
