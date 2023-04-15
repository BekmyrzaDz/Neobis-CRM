import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  ICreateGroupOnstudyREQ,
  ICreateGroupOnstudyRES,
  IDeleteGroupOnStudy,
  IEditGroupOnStudy,
  IGetAllGroupsOnStudy,
  IGetGroupOnStudyById,
  IGroupOnStudy,
} from '../../types'
import groupsOnStudyService from '../../services/GroupsOnStudy'

// Get all groups on study
export const getAllGroups = createAsyncThunk<
  IGroupOnStudy[],
  IGetAllGroupsOnStudy,
  { rejectValue: string }
>(
  'groupsOnStudy/getAllGroups',
  async ({ token, departmentFilter }, thunkAPI) => {
    try {
      const response = await groupsOnStudyService.getAllGroupsOnStudy({
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

// Get group department filters
export const getGroupDepartmentFilters = createAsyncThunk<
  IGroupOnStudy[],
  string,
  { rejectValue: string }
>('groupsOnStudy/getGroupDepartmentFilters', async (token, thunkAPI) => {
  try {
    const response = await groupsOnStudyService.getGroupDepartmentFilters(token)
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

// Create group on study
export const createGroupOnStudy = createAsyncThunk<
  ICreateGroupOnstudyRES,
  ICreateGroupOnstudyREQ,
  { rejectValue: string }
>(
  'groupsOnStudy/createStudentOnStudy',
  async (
    {
      token,
      name,
      mentor,
      department,
      students_max,
      schedule_type,
      classroom,
      is_archive,
      start_at_date,
      end_at_date,
      start_at_time,
      end_at_time,
    },
    thunkAPI
  ) => {
    try {
      const response = await groupsOnStudyService.createGroupOnStudy({
        token,
        name,
        mentor,
        department,
        students_max,
        schedule_type,
        classroom,
        is_archive,
        start_at_date,
        end_at_date,
        start_at_time,
        end_at_time,
      })
      if (response) {
        toast.success('Новая группа успешно создана')
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

// Get group on study by ID
export const getGroupOnStudyById = createAsyncThunk<
  IGroupOnStudy,
  IGetGroupOnStudyById,
  { rejectValue: string }
>('groupsOnStudy/getGroupOnStudyById', async ({ token, id }, thunkAPI) => {
  try {
    const response = await groupsOnStudyService.getGroupOnStudyById({
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

// Edit student on study
export const editGroupOnStudyById = createAsyncThunk<
  IGroupOnStudy,
  IEditGroupOnStudy,
  { rejectValue: string }
>(
  'groupsOnStudy/editGroupOnStudyById',
  async (
    {
      token,
      id,
      name,
      mentor,
      department,
      students_max,
      schedule_type,
      classroom,
      is_archive,
      start_at_date,
      end_at_date,
      start_at_time,
      end_at_time,
    },
    thunkAPI
  ) => {
    try {
      const response = await groupsOnStudyService.editGroupOnStudyById({
        token,
        id,
        name,
        mentor,
        department,
        students_max,
        schedule_type,
        classroom,
        is_archive,
        start_at_date,
        end_at_date,
        start_at_time,
        end_at_time,
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

// Delete group on study by ID
export const deleteGroupOnStudyById = createAsyncThunk<
  string,
  IDeleteGroupOnStudy,
  { rejectValue: string }
>('groupsOnStudy/deleteGroupOnStudyById', async ({ token, id }, thunkAPI) => {
  try {
    const response = await groupsOnStudyService.deleteGroupOnStudyById({
      token,
      id,
    })
    toast.success('Группа успешно удалена')
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
})
