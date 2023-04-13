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
      toast.error(message)
      return rejectWithValue(message)
    }
    throw error
  }
})

// getStudentById Action
export const fetchStudentById = createAsyncThunk<
  IStudent,
  number,
  { rejectValue: string }
>('client/fetchStudentById', async (id, {rejectWithValue}) => {
  try {
    const response = await dndService.getStudentById(id)
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

// updateStudentStatus Action 
export const fetchUpdateStudent = createAsyncThunk<
  IStudent,
  IUpdateStudentData,
  { rejectValue: string }
>('updateClient/fetchUpdateStudent', async ({id, updateStudent}, {rejectWithValue}) => {
  try {    
    const response = await dndService.updateStudent({id, updateStudent})

    return response
  } catch (error: unknown) {
    if (typeof error === 'string') {
      // toast.error(error)
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

// updateDetailStudent Action 
export const fetchDetailUpdateStudent = createAsyncThunk<
  IStudent,
  IUpdateStudentData,
  { rejectValue: string }
>('updateClient/fetchDetailUpdateStudent', async ({id, updateStudent}, {rejectWithValue}) => {
  try {    
    const response = await dndService.updateStudent({id, updateStudent})
    if (response) {
      toast.success('Данные успешно обновлены')
    }
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

// deleteStudent Action 
export const fetchDeleteStudent = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>('updateClient/fetchDeleteStudent', async (id, {rejectWithValue}) => {
  try {    
    const response = await dndService.deleteStudent(id)
    if (response === 204) {
      toast.success('Заявка успешно удалена')
    }
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