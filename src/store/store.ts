import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../modules/auth/redux/authSlice';
import profileReducer from '../modules/profilePage/redux/profileSlice';
import allEmployeesReducer from '../modules/Employees/redux/allEmployees/allEmployeesSlice';
import managersReducer from '../modules/Employees/redux/managers/managersSlice';
import mentorsReducer from '../modules/Employees/redux/mentors/mentorsSlice';
import adminsReducer from '../modules/Employees/redux/admins/adminsSlice';
// import { createStudentSlice } from './../modules/AddClient/redux/addClientSlice';
import clientReducer from '../modules/DndMainPage/redux/dndSlice';
import createStudentSlice from '../modules/AddClient/redux/addClientSlice';
import managerArhiveSlice from '../modules/Archive/redux/managerArchive/managerArhiveSlice';
import adminArhiveSlice from '../modules/Archive/redux/adminArchive/adminArchiveSlice';
import mentorArchiveSlice from '../modules/Archive/redux/mentorArchive/mentorArchiveSlice';
import studentArchiveSlice from '../modules/Archive/redux/studentArchive/studdentArchiveSlice';
import groupArchiveSlice from '../modules/Archive/redux/groupArchive/groupArchiveSlice';
import detailWiewReducer from '../modules/DndMainPage/redux/detailViewSlice';
import studentsOnStudyReducer from '../modules/students/redux/students/studentsOnStudySlice';
import courseArchiveReducer from '../modules/Archive/redux/courseArchive/courseArchiveSlice';
import blackListSlice from '../modules/Archive/redux/blackListSlice/blackListSlice';
import groupsOnStudyReducer from '../modules/students/redux/groups/groupsOnStudySlice';

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
  managerArhive: managerArhiveSlice,
  adminsArhive: adminArhiveSlice,
  mentorArchive: mentorArchiveSlice,
  studentArchive: studentArchiveSlice,
  groupArchive: groupArchiveSlice,
  courseArchive: courseArchiveReducer,
  blackList: blackListSlice,
  singelClient: detailWiewReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
