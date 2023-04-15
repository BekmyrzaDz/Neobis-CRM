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
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ICoursesState = {
  courses: [],
  status: 'idle',
  error: null,
};

const userItem = localStorage.getItem('user');
const access_token: string | undefined = userItem ? JSON.parse(userItem).access : undefined;

export const getArchiveGourse = createAsyncThunk<ICourse[], void, AsyncThunkConfig>(
  'managers/gerArhiveCourses',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<ICourse[]>('http://64.226.89.72/api/archive/courses/', {
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
      .addCase(getArchiveGourse.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getArchiveGourse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(getArchiveGourse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default courseArchiveSlice.reducer;
