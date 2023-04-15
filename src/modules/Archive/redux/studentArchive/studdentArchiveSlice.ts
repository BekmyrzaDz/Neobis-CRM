import { createAsyncThunk, createSlice, AsyncThunkConfig } from '@reduxjs/toolkit';
import axios from 'axios';

interface IStudents {
  id: number;
  first_name: string;
  last_name: string;
  group: string;
  phone: string;
  came_from: {
    id: number;
    name: string;
  };
  department: {
    name: string;
  };
  on_request: boolean;
  is_archive: boolean;
  blacklist: boolean;
  laptop: boolean;
  payment_status: number;
  notes: string;
}

interface IStudentsState {
  students: IStudents[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IStudentsState = {
  students: [],
  status: 'idle',
  error: null,
};

const userItem = localStorage.getItem('user');
const access_token: string | undefined = userItem ? JSON.parse(userItem).access : undefined;

export const getArchiveStudent = createAsyncThunk<IStudents[], void, AsyncThunkConfig>(
  'managers/gerArhiveStudents',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IStudents[]>('http://64.226.89.72/api/archive/students/', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

const studentArhiveSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArchiveStudent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getArchiveStudent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload;
      })
      .addCase(getArchiveStudent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default studentArhiveSlice.reducer;
