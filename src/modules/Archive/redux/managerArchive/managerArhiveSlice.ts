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
  deleteStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  deleteError: string | null;
  archiveStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveError: string | null;
}

const initialState: IManagersState = {
  managers: [],
  status: 'idle',
  error: null,
  deleteStatus: 'idle',
  deleteError: null,
  archiveStatus: 'idle',
  archiveError: null,
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

export const deleteArchiveManagerBuId = createAsyncThunk<void, number, AsyncThunkConfig>(
  'employee/deleteArchiveMnagers',
  async (id: number, thunkApi) => {
    try {
      await axios.delete(`http://64.226.89.72/api/archive/managers/${id}/`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const unzippingManagers = createAsyncThunk<IManagers, number, AsyncThunkConfig>(
  'employee/archiveEmployee',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.patch<IManagers>(
        `http://64.226.89.72/api/archive/managers/${id}/`,
        { is_active: true },
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

const managerArhiveSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {
    removeManager: (state, action) => {
      const index = state.managers.findIndex((manager) => manager.id === action.payload);
      if (index !== -1) {
        state.managers.splice(index, 1);
      }
    },
  },
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
      })
      .addCase(deleteArchiveManagerBuId.pending, (state) => {
        state.deleteStatus = 'loading';
      })
      .addCase(deleteArchiveManagerBuId.fulfilled, (state) => {
        state.deleteStatus = 'succeeded';
        const index = state.managers.findIndex((manager) => manager.id === action.meta.arg);
        if (index !== -1) {
          state.managers.splice(index, 1);
        }
      })
      .addCase(deleteArchiveManagerBuId.rejected, (state, action) => {
        state.deleteStatus = 'failed';
        state.deleteError = action.error.message ?? 'Something went wrong.';
      })
      .addCase(unzippingManagers.pending, (state) => {
        state.archiveStatus = 'loading';
      })
      .addCase(unzippingManagers.fulfilled, (state, action) => {
        state.archiveStatus = 'succeeded';
        const index = state.managers.findIndex((e) => e.id === action.payload.id);
        state.managers[index] = action.payload;
      })
      .addCase(unzippingManagers.rejected, (state, action) => {
        state.archiveStatus = 'failed';
        state.archiveError = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default managerArhiveSlice.reducer;
