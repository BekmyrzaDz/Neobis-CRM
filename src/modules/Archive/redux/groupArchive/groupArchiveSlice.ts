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
}

const initialState: IGroupsState = {
  groups: [],
  status: 'idle',
  error: null,
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
      });
  },
});

export default groupArhiveSlice.reducer;
