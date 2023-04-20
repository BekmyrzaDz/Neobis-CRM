import { createAsyncThunk, createSlice, AsyncThunkConfig } from '@reduxjs/toolkit';
import axios from 'axios';

interface IAdmins {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | number;
  image: string;
  token: void;
}

interface IAdminsState {
  admins: IAdmins[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  deleteStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  deleteError: string | null;
  archiveStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  archiveError: string | null;
}

const initialState: IAdminsState = {
  admins: [],
  status: 'idle',
  error: null,
  deleteStatus: 'idle',
  deleteError: null,
  archiveStatus: 'idle',
  archiveError: null,
};

interface ICreateAdminRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string | number;
  image: string;
  is_archive: boolean;
}

const userItem = localStorage.getItem('user');
const access_token: string | undefined = userItem ? JSON.parse(userItem).access : undefined;

export const getArchiveAdmins = createAsyncThunk<IAdmins[], void, AsyncThunkConfig>(
  'admins/getArchiveAdmins',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IAdmins[]>('http://64.226.89.72/api/archive/admins/', {
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

export const deleteArchiveAdminById = createAsyncThunk<void, number, AsyncThunkConfig>(
  'employee/deleteArchiveMnagers',
  async (id: number, thunkApi) => {
    try {
      await axios.delete(`http://64.226.89.72/api/archive/admins/${id}/`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const unzippingAdmins = createAsyncThunk<IAdmins, number, AsyncThunkConfig>(
  'employee/archiveEmployee',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.patch<IAdmins>(
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

const adminArchiveSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArchiveAdmins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getArchiveAdmins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.admins = action.payload;
      })
      .addCase(getArchiveAdmins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      })
      .addCase(deleteArchiveAdminById.pending, (state) => {
        state.deleteStatus = 'loading';
      })
      .addCase(deleteArchiveAdminById.fulfilled, (state) => {
        state.deleteStatus = 'succeeded';
        const index = state.admins.findIndex((admin) => manager.id === action.meta.arg);
        if (index !== -1) {
          state.admins.splice(index, 1);
        }
      })
      .addCase(deleteArchiveAdminById.rejected, (state, action) => {
        state.deleteStatus = 'failed';
        state.deleteError = action.error.message ?? 'Something went wrong.';
      })
      .addCase(unzippingAdmins.pending, (state) => {
        state.archiveStatus = 'loading';
      })
      .addCase(unzippingAdmins.fulfilled, (state, action) => {
        state.archiveStatus = 'succeeded';
        const index = state.admins.findIndex((e) => e.id === action.payload.id);
        state.admins[index] = action.payload;
      })
      .addCase(unzippingAdmins.rejected, (state, action) => {
        state.archiveStatus = 'failed';
        state.archiveError = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default adminArchiveSlice.reducer;
