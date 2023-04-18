import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import dndService from '../services/dndService';
import { ICreatePayment, IPayment, IStudent, IUpdateStudentData } from '../types';

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

// getStudentById Action
export const getStudentById = createAsyncThunk<
  IStudent,
  number,
  { rejectValue: string }
>('client/getStudentById', async (id, {rejectWithValue}) => {
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

// createPayment Action
export const createPayment = createAsyncThunk<
IPayment,
ICreatePayment,
  { rejectValue: string }
>('updateClient/createPayment', async ({...paymentData}, {rejectWithValue}) => {
  try {   
    const response = await dndService.createPayment({...paymentData})
    if (response) {
      toast.success('Заявка успешно добавлена в раздел “Студенты” ')
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

// updateStudentStatus Action 
export const editStudentById = createAsyncThunk<
  IStudent,
  IUpdateStudentData,
  { rejectValue: string }
>('updateClient/editStudentById', async ({id, updateStudent}, {rejectWithValue}) => {
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
export const detailEditStudentById = createAsyncThunk<
  IStudent,
  IUpdateStudentData,
  { rejectValue: string }
>('updateClient/detailEditStudentById', async ({id, updateStudent}, {rejectWithValue}) => {
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
export const deleteStudentById = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>('updateClient/deleteStudentById', async (id, {rejectWithValue}) => {
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

// deleteStudent Action 
export const deleteStudentByIdForAnalytics = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>('updateClient/deleteStudentByIdForAnalytics', async (id, {rejectWithValue}) => {
  try {    
    const response = await dndService.deleteStudent(id)
    if (response === 204) {
      toast.info('Заявка добавлена в раздел “Аналитика”')
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