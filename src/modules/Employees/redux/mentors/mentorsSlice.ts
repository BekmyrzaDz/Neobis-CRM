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

interface IMentor {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  image: string;
  linkedin: string;
  department: {
    name: string;
  };
  patent_number: number;
  patent_start: string;
  patent_end: string;
  is_active: boolean;
}

interface IMentorsState {
  mentors: IMentors[];
  mentor: IMentor | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  deleteStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveError: string | null;
  deleteError: string | null;
  error: string | null;
}

const initialState: IMentorsState = {
  mentors: [],
  mentor: null,
  status: 'idle',
  deleteStatus: 'idle',
  deleteError: null,
  archiveStatus: 'idle',
  archiveError: null,
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
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const getMentorById = createAsyncThunk<IMentorState, number, AsyncThunkConfig>(
  'mentors/getMentorById',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.get<IMentorState>(`http://64.226.89.72/api/mentors/${id}`, {
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

export const deleteMentorById = createAsyncThunk<void, number, AsyncThunkConfig>(
  'mentors/deleteMentorById',
  async (id: number, thunkApi) => {
    try {
      await axios.delete<void>(`http://64.226.89.72/api/mentors/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const archiveMentorById = createAsyncThunk<IMentor, number, AsyncThunkConfig>(
  'mentors/archiveMentorById',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.patch<IMentor>(
        `http://64.226.89.72/api/mentors/${id}/`,
        {
          is_active: false, // изменяем состояние на неактивное
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      return response.data;
    } catch (error: any) {
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
      })
      .addCase(getMentorById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMentorById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentor = [action.payload];
      })
      .addCase(getMentorById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      })
      .addCase(deleteMentorById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deleteMentorById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      })
      .addCase(archiveMentorById.pending, (state) => {
        state.archiveStatus = 'loading';
      })
      .addCase(archiveMentorById.fulfilled, (state, action) => {
        state.archiveStatus = 'succeeded';
        const index = state.mentors.findIndex((e) => e.id === action.payload.id);
        state.mentors[index] = action.payload;
      })
      .addCase(archiveMentorById.rejected, (state, action) => {
        state.archiveStatus = 'failed';
        state.archiveError = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default mentorsSlice.reducer;
