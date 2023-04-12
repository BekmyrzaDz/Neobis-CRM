import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { IGetAllGroupsOnStudy, IGroupOnStudy } from '../../types'
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
