import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import dndService from '../services/dndService';
// import { IStudent } from '../types';

interface IDepartment {
  name: string
}
interface IPaymentMethod {
  name: string
}

interface IStatus {
  name: string
}

interface ISource {
  name: string
}

interface IReason {
  name: string
}

interface IStudent {
  time: string
  id: number
  first_name: string
  last_name: string
  surname?: string
  notes?: string
  phone: string
  laptop?: boolean
  department: IDepartment
  came_from: ISource
  payment_method?: IPaymentMethod
  status?: IStatus
  paid: boolean
  reason: IReason
  on_request: boolean
}

// getAllStudents Action
export const getAllStudents = createAsyncThunk<
  IStudent[],
  undefined,
  { rejectValue: string }
>('client/getAllStudents', async (_, {rejectWithValue}) => {
  try {
    const response = await dndService.getAllStudents()
    return response
  } catch (error: unknown) {
    if (typeof error === 'string') {
      toast.error(error)
      return rejectWithValue(error)
    }
    if (error instanceof AxiosError) {
      const message =
        (error.response &&
          error.response?.data &&
          error.response?.data?.message) ||
        error.message ||
        error.toString()
      toast.error(message)
      return rejectWithValue(message)
    }
    throw error
  }
})