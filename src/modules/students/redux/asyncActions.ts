import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import studentsOnStudyService from '../services/StudentsOnStudy'
import {
  ICreateStudentonStudy,
  IGetAllStudentsOnStudy,
  IGetStudentsOnStudyById,
  IStudentOnStudy,
} from '../types'

// Get all students on study
export const getStudentsOnStudy = createAsyncThunk<
  IStudentOnStudy[],
  IGetAllStudentsOnStudy,
  { rejectValue: string }
>(
  'studentsOnStudy/getStudentsOnStudy',
  async ({ token, departmentFilter }, thunkAPI) => {
    try {
      const response = await studentsOnStudyService.getStudentsOnStudy({
        token,
        departmentFilter,
      })
      return response
    } catch (error: unknown) {
      if (typeof error === 'string') {
        toast.error(error)
        return thunkAPI.rejectWithValue(error)
      }
      if (error instanceof AxiosError) {
        const message =
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

// Get student on study by ID
export const getStudentOnStudyById = createAsyncThunk<
  IStudentOnStudy,
  IGetStudentsOnStudyById,
  { rejectValue: string }
>('studentsOnStudy/getStudentOnStudyById', async ({ token, id }, thunkAPI) => {
  try {
    const response = await studentsOnStudyService.getStudentOnStudyById({
      token,
      id,
    })
    return response
  } catch (error: unknown) {
    if (typeof error === 'string') {
      toast.error(error)
      return thunkAPI.rejectWithValue(error)
    }
    if (error instanceof AxiosError) {
      const message =
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

// Create student on study
export const createStudentOnStudy = createAsyncThunk<
  IStudentOnStudy,
  ICreateStudentonStudy,
  { rejectValue: string }
>(
  'studentsOnStudy/createStudentOnStudy',
  async (
    {
      token,
      first_name,
      last_name,
      surname,
      phone,
      came_from,
      department,
      on_request,
      is_archive,
      laptop,
      payment_status,
      notes,
    },
    thunkAPI
  ) => {
    try {
      const response = await studentsOnStudyService.createStudentOnStudy({
        token,
        first_name,
        last_name,
        surname,
        phone,
        came_from,
        department,
        on_request,
        is_archive,
        laptop,
        payment_status,
        notes,
      })
      if (response) {
        toast.success('Новый студент успешно создан')
      }
      return response[0]
    } catch (error: unknown) {
      if (typeof error === 'string') {
        toast.error(error)
        return thunkAPI.rejectWithValue(error)
      }
      if (error instanceof AxiosError) {
        const message =
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
