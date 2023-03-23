import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../modules/auth/redux/authSlice'
import profileReducer from '../modules/profilePage/redux/profileSlice'
import clientReducer from '../modules/DndMainPage/redux/dndSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  client: clientReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
