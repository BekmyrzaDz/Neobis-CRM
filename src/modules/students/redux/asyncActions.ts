import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import studentsOnStudyService from '../services/StudentsOnStudy'
import { IStudentOnStudy } from '../types'

// Get all students on study
export const getStudentsOnStudy = createAsyncThunk<
  IStudentOnStudy[],
  string,
  { rejectValue: string }
>('studentsOnStudy/getStudentsOnStudy', async (token, thunkAPI) => {
  try {
    const response = await studentsOnStudyService.getStudentsOnStudy(token)
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
