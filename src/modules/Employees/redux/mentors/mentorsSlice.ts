import { createAsyncThunk, createSlice, AsyncThunkConfig } from '@reduxjs/toolkit';
import axios from 'axios';

interface IMentors {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | number;
  image: string;
  token: void;
  patent_number: number;
  patent_start: string;
  patent_end: string;
}

interface IMentorsState {
  mentors: IMentors[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IMentorsState = {
  mentors: [],
  status: 'idle',
  error: null,
};

const userItem = localStorage.getItem('user');
const access_token: string | undefined = userItem ? JSON.parse(userItem).access : undefined;

export const getMentors = createAsyncThunk<IMentorsState[], void, AsyncThunkConfig>(
  'mentors/getMentos',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IMentorsState[]>('http://64.226.89.72/api/mentors/', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

const mentorsSlice = createSlice({
  name: 'mentors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMentors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMentors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentors = action.payload;
      })
      .addCase(getMentors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default mentorsSlice.reducer;
