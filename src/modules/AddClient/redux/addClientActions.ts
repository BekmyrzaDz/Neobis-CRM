import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from "@reduxjs/toolkit";
import createService from "../services/addClientService";
import { ICreateStudent, IStudent } from "../types";

// createStudent Action
export const createStudent = createAsyncThunk<
IStudent,
ICreateStudent,
  { rejectValue: string }
>('createClient/createStudent', async ({...studentData}, {rejectWithValue}) => {
  try {   
    const response = await createService.createStudent({...studentData})
    if (response) {
      toast.success('Заявка успешно создана')
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