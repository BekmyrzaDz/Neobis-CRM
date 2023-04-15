import { createAsyncThunk, createSlice, AsyncThunkConfig } from '@reduxjs/toolkit';
import axios from 'axios';

interface IManagers {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | number;
  image: string;
  token: void;
}

interface IManagersState {
  managers: IManagers[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IManagersState = {
  managers: [],
  status: 'idle',
  error: null,
};

const userItem = localStorage.getItem('user');
const access_token: string | undefined = userItem ? JSON.parse(userItem).access : undefined;

export const gerArhiveManagers = createAsyncThunk<IManagers[], void, AsyncThunkConfig>(
  'managers/gerArhiveManagers',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IManagers[]>('http://64.226.89.72/api/archive/managers/', {
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

const managerArhiveSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(gerArhiveManagers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(gerArhiveManagers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.managers = action.payload;
      })
      .addCase(gerArhiveManagers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default managerArhiveSlice.reducer;
