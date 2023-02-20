import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IAuthState, IUser } from '../types'
import { login } from './asyncActions'

// Get user from localStorage
const userString = localStorage.getItem('user')
let user
if (userString !== null) {
  user = JSON.parse(userString) as IUser
}

const initialState: IAuthState = {
  user: user ? user : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
