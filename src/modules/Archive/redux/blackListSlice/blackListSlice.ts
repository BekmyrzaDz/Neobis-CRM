import { createAsyncThunk, createSlice, AsyncThunkConfig } from '@reduxjs/toolkit';
import axios from 'axios';

interface IBlackList {
  fio: string;
  user: {
    fio: string;
  };
  blacklist: boolean;
  blacklist_created_at: string;
}

interface IBlackListState {
  blacklist: IBlackList[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IBlackListState = {
  blacklist: [],
  status: 'idle',
  error: null,
};

const userItem = localStorage.getItem('user');
const access_token: string | undefined = userItem ? JSON.parse(userItem).access : undefined;

export const getBlackList = createAsyncThunk<IBlackList[], void, AsyncThunkConfig>(
  'managers/gerArhiveCourses',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IBlackList[]>('http://64.226.89.72/api/blacklist', {
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

const blackListSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlackList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBlackList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blacklist = action.payload;
      })
      .addCase(getBlackList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default blackListSlice.reducer;
