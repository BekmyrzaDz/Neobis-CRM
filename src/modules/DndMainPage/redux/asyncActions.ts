import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import dndService from '../services/dndService';
import { IStudent, IUpdateStudentData } from '../types';

// getAllStudents Action
export const fetchAllStudents = createAsyncThunk<
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
      // toast.error(message)
      return rejectWithValue(message)
    }
    throw error
  }
})

export const fetchUpdateStudent = createAsyncThunk<
  IStudent,
  IUpdateStudentData,
  { rejectValue: string }
>('updateClient/fetchUpdateStudent', async ({id, updateStudentStatus}, {rejectWithValue, dispatch}) => {
  try {    
    const response = await dndService.updateStudent({id, updateStudentStatus})

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
      // toast.error(message)
      return rejectWithValue(message)
    }
    throw error
  }
})