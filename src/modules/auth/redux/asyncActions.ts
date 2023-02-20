import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../services/authService'
import { ILogin, IUser } from '../types'

// Login
export const login = createAsyncThunk<IUser, ILogin, { rejectValue: string }>(
  'auth/login',
  async (userData: ILogin, thunkAPI) => {
    try {
      const response = await authService.login(userData)
      if (response) {
        toast.success('Вы успешно вошли в систему')
      }
      return response
    } catch (error) {
      if (typeof error === 'string') {
        toast.error(error)
        return thunkAPI.rejectWithValue(error)
      }
      if (error instanceof Error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        toast.error(message)
        return thunkAPI.rejectWithValue(message)
      }
      throw error
    }
  }
)
