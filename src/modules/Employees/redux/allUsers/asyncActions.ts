import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface AllUsers {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  user_type: string;
  image: string | null;
}

export const getAllUsers = createAsyncThunk<AllUsers>;
