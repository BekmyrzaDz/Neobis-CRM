import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../modules/auth/redux/authSlice'
import profileReducer from '../modules/profilePage/redux/profileSlice'
import allEmployeesReducer from '../modules/Employees/redux/allEmployees/allEmployeesSlice'
import managersReducer from '../modules/Employees/redux/managers/managersSlice'
import mentorsReducer from '../modules/Employees/redux/mentors/mentorsSlice'
import adminsReducer from '../modules/Employees/redux/admins/adminsSlice'
// import { createStudentSlice } from './../modules/AddClient/redux/addClientSlice';
<<<<<<< HEAD
import clientReducer from '../modules/DndMainPage/redux/dndSlice';
import createStudentSlice from '../modules/AddClient/redux/addClientSlice';
import managerArhiveSlice from '../modules/Archive/redux/managerArchive/managerArhiveSlice';
import adminArhiveSlice from '../modules/Archive/redux/adminArchive/adminArchiveSlice';
import mentorArchiveSlice from '../modules/Archive/redux/mentorArchive/mentorArchiveSlice';
=======
import clientReducer from '../modules/DndMainPage/redux/dndSlice'
import detailWiewReducer from '../modules/DndMainPage/redux/detailViewSlice'
import createStudentSlice from '../modules/AddClient/redux/addClientSlice'
import studentsOnStudyReducer from '../modules/students/redux/students/studentsOnStudySlice'
import groupsOnStudyReducer from '../modules/students/redux/groups/groupsOnStudySlice'


>>>>>>> dev

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  studentsOnStudy: studentsOnStudyReducer,
  groupsOnStudy: groupsOnStudyReducer,
  allEmployees: allEmployeesReducer,
  managers: managersReducer,
  mentors: mentorsReducer,
  admins: adminsReducer,
  client: clientReducer,
  addClient: createStudentSlice,
<<<<<<< HEAD
  managerArhive: managerArhiveSlice,
  adminsArhive: adminArhiveSlice,
  mentorArchive: mentorArchiveSlice,
});
=======
  singelClient: detailWiewReducer,
})
>>>>>>> dev

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
