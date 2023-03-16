import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../modules/auth/redux/authSlice'
import profileReducer from '../modules/profilePage/redux/profileSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
