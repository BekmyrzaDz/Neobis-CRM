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
  deleteStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveError: string | null;
  deleteError: string | null;
}

const initialState: IStudentsState = {
  students: [],
  status: 'idle',
  error: null,
  deleteStatus: 'idle',
  deleteError: null,
  archiveStatus: 'idle',
  archiveError: null,
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

export const deleteStudentById = createAsyncThunk<void, number, AsyncThunkConfig>(
  'mentors/deleteMentorById',
  async (id: number, thunkApi) => {
    try {
      await axios.delete<void>(`http://64.226.89.72/api/archive/students/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const archiveStudentById = createAsyncThunk<IStudents, number, AsyncThunkConfig>(
  'mentors/archiveMentorById',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.patch<IStudents>(
        `http://64.226.89.72/api/archive/students/${id}/`,
        {
          is_archive: false, // изменяем состояние на неактивное
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
      })
      .addCase(deleteStudentById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deleteStudentById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      })
      .addCase(archiveStudentById.pending, (state) => {
        state.archiveStatus = 'loading';
      })
      .addCase(archiveStudentById.fulfilled, (state, action) => {
        state.archiveStatus = 'succeeded';
        state.error = null;
      })
      .addCase(archiveStudentById.rejected, (state, action) => {
        state.archiveStatus = 'failed';
        state.archiveError = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default studentArhiveSlice.reducer;
