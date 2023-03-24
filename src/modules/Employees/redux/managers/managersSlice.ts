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

export const getManagers = createAsyncThunk<IManagers[], void, AsyncThunkConfig>(
  'managers/getManagers',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IManagers[]>('http://64.226.89.72/api/managers/', {
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

const managersSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getManagers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getManagers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.managers = action.payload;
      })
      .addCase(getManagers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default managersSlice.reducer;
