import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import studentsOnStudyService from '../../services/StudentsOnStudy'
import {
  ICreateStudentonStudy,
  IDeleteStudentOnStudyById,
  IEditStudentonStudy,
  IGetAllStudentsOnStudy,
  IGetStudentsOnStudyById,
  IStudentOnStudy,
} from '../../types'

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

// Get all students on study
export const getDepartmentFilters = createAsyncThunk<
  IStudentOnStudy[],
  string,
  { rejectValue: string }
>('studentsOnStudy/getDepartmentFilters', async (token, thunkAPI) => {
  try {
    const response = await studentsOnStudyService.getDepartmentFilters(token)
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
      group,
      phone,
      came_from,
      department,
      on_request,
      is_archive,
      blacklist,
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
        group,
        phone,
        came_from,
        department,
        on_request,
        is_archive,
        blacklist,
        laptop,
        payment_status,
        notes,
      })
      if (response) {
        toast.success('Новый студент успешно создан')
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
          error.response?.data?.phone[0] ||
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

// Edit student on study
export const editStudentOnStudyById = createAsyncThunk<
  IStudentOnStudy,
  IEditStudentonStudy,
  { rejectValue: string }
>(
  'studentsOnStudy/editStudentOnStudyById',
  async (
    {
      token,
      id,
      first_name,
      last_name,
      group,
      phone,
      came_from,
      department,
      on_request,
      is_archive,
      blacklist,
      laptop,
      payment_status,
      notes,
    },
    thunkAPI
  ) => {
    try {
      const response = await studentsOnStudyService.editStudentOnStudyById({
        token,
        id,
        first_name,
        last_name,
        group,
        phone,
        came_from,
        department,
        on_request,
        is_archive,
        blacklist,
        laptop,
        payment_status,
        notes,
      })
      if (response) {
        toast.success('Данные успешно обновлены')
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

// Delete student on study by ID
export const deleteStudentOnStudyById = createAsyncThunk<
  string,
  IDeleteStudentOnStudyById,
  { rejectValue: string }
>(
  'studentsOnStudy/deleteStudentOnStudyById',
  async ({ token, id }, thunkAPI) => {
    try {
      const response = await studentsOnStudyService.deleteStudentOnStudyById({
        token,
        id,
      })
      toast.success('Пользователь успешно удален')
      return response
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error.response?.data?.detail ||
          (error.response &&
            error.response?.data &&
            error.response?.data?.message) ||
          error.message ||
          error.toString() ||
          error.response?.data.details
        toast.error(message)
        return thunkAPI.rejectWithValue(message)
      }
      throw error
    }
  }
)
