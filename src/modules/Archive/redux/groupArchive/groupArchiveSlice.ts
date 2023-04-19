import { createAsyncThunk, createSlice, AsyncThunkConfig } from '@reduxjs/toolkit';
import axios from 'axios';

interface IGroup {
  id: number;
  name: string;
  mentor: {
    id: number;
    first_name: string;
    last_name: string;
    image: string;
  };
  department: {
    name: string;
  };
  students_max: number;
  schedule_type: number;
  classroom: {
    id: number;
    name: string;
  };
  is_archive: boolean;
  start_at_date: string;
  end_at_date: string;
  start_at_time: string;
  end_at_time: string;
  current_students: number;
}

interface IGroupsState {
  groups: IGroup[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  deleteStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveError: string | null;
  deleteError: string | null;
}

const initialState: IGroupsState = {
  groups: [],
  status: 'idle',
  error: null,
  deleteStatus: 'idle',
  deleteError: null,
  archiveStatus: 'idle',
  archiveError: null,
};

const userItem = localStorage.getItem('user');
const access_token: string | undefined = userItem ? JSON.parse(userItem).access : undefined;

export const getArchiveGroup = createAsyncThunk<IGroup[], void, AsyncThunkConfig>(
  'managers/gerArhiveGroups',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IGroup[]>('http://64.226.89.72/api/archive/groups/', {
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

export const deleteGroupById = createAsyncThunk<void, number, AsyncThunkConfig>(
  'mentors/deleteMentorById',
  async (id: number, thunkApi) => {
    try {
      await axios.delete<void>(`http://64.226.89.72/api/archive/groups/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const archiveGroupById = createAsyncThunk<IGroup, number, AsyncThunkConfig>(
  'mentors/archiveMentorById',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.patch<IGroup>(
        `http://64.226.89.72/api/archive/groups/${id}/`,
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

const groupArhiveSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArchiveGroup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getArchiveGroup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.groups = action.payload;
      })
      .addCase(getArchiveGroup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      })
      .addCase(deleteGroupById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deleteGroupById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      })
      .addCase(archiveGroupById.pending, (state) => {
        state.archiveStatus = 'loading';
      })
      .addCase(archiveGroupById.fulfilled, (state, action) => {
        state.archiveStatus = 'succeeded';
        state.error = null;
      })
      .addCase(archiveGroupById.rejected, (state, action) => {
        state.archiveStatus = 'failed';
        state.archiveError = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default groupArhiveSlice.reducer;
