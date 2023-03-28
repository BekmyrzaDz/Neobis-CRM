import { createSlice } from '@reduxjs/toolkit';
import { getAllEmployees } from './allEmployeesSlice';

interface IAllEmployees {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | number;
  user_type: string;
  image: string;
  token: void;
}

interface IAllEmployeesState {
  allEmployees: IAllEmployees[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IAllEmployeesState = {
  allEmployees: [],
  status: 'idle',
  error: null,
};

const allEmployeesSlice = createSlice({
  name: 'allEmployees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allEmployees = action.payload;
      })
      .addCase(getAllEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong.';
      });
  },
});

export default allEmployeesSlice.reducer;
