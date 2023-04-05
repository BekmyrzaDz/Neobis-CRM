import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfile, IProfileState } from '../types'
import { getProfileById, updateAvatar, updateProfile } from './asyncActions'

// Get profile from localStorage
const profileString = localStorage.getItem('profile')
let profile
if (profileString !== null) {
  profile = JSON.parse(profileString) as IProfile
}

const initialState: IProfileState = {
  profile: profile ? profile : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileReset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getProfileById.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.isLoading = false
          state.isSuccess = true
          state.profile = action.payload
        }
      )
      .addCase(getProfileById.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.profile = null
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        updateProfile.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.isLoading = false
          state.isSuccess = true
          state.profile = action.payload
        }
      )
      .addCase(updateProfile.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.profile = null
      })
      .addCase(updateAvatar.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        updateAvatar.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.isLoading = false
          state.isSuccess = true
        }
      )
      .addCase(updateAvatar.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.profile = null
      })
  },
})

export const { profileReset } = profileSlice.actions
export default profileSlice.reducer
