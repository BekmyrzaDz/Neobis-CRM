import { createAsyncThunk, createSlice, AsyncThunkConfig } from '@reduxjs/toolkit';
import axios from 'axios';

interface ICourse {
  id: number;
  name: string;
  image: string;
  duration_month: string;
  description: string;
  is_archive: true;
  mentor_set: [
    {
      fio: string;
    },
  ];
  group_set: [
    {
      name: string;
      start_at_time: string;
      end_at_time: string;
    },
  ];
  price: string;
  color: string;
  current_groups: string;
}

interface ICoursesState {
  courses: ICourse[];
  course: null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  deleteStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveError: string | null;
  deleteError: string | null;
}

const initialState: ICoursesState = {
  courses: [],
  course: null,
  status: 'idle',
  error: null,
  deleteStatus: 'idle',
  deleteError: null,
  archiveStatus: 'idle',
  archiveError: null,
};

const userItem = localStorage.getItem('user');
const access_token: string | undefined = userItem ? JSON.parse(userItem).access : undefined;

export const getAllCourses = createAsyncThunk<ICourse[], void, AsyncThunkConfig>(
  'managers/gerArhiveCourses',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<ICourse[]>('http://64.226.89.72/api/departments/', {
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

export const deleteCourseById = createAsyncThunk<void, number, AsyncThunkConfig>(
  'mentors/deleteMentorById',
  async (id: number, thunkApi) => {
    try {
      await axios.delete<void>(`http://64.226.89.72/api/archive/departments/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const archiveCourseById = createAsyncThunk<ICourse, number, AsyncThunkConfig>(
  'mentors/archiveMentorById',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.get<ICourse>(`http://64.226.89.72/api/departments/${id}/`, {
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

const courseArchiveSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      })
      .addCase(deleteCourseById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deleteCourseById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      })
      .addCase(archiveCourseById.pending, (state) => {
        state.archiveStatus = 'loading';
      })
      .addCase(archiveCourseById.fulfilled, (state, action) => {
        state.archiveStatus = 'succeeded';
        state.course = [action.payload];
      })
      .addCase(archiveCourseById.rejected, (state, action) => {
        state.archiveStatus = 'failed';
        state.archiveError = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default courseArchiveSlice.reducer;
