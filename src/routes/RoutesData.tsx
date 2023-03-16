import { createBrowserRouter } from "react-router-dom";
import ArchivePage from "../pages/archive/components/ArchivePage";
import CoursePage from "../pages/course/components/CoursePage"
import EmployeesPage from "../pages/Employees/EmployeesPage"
import Layout from "../pages/Layout/components/Layout"
import MainPage from "../pages/main/components/MainPage/MainPage"
import StudentsPage from "../pages/students/components/StudentsPage"
import WaitingListPage from "../pages/waitingList/components/WaitingListPage"
import AuthPage from "../pages/auth/AuthPage"
import Page404 from "../pages/page404/Page404"
import AnalyticsPage from "../pages/analitics/components/AnalyticsPage"
import ProfilePage from "../pages/profile/ProfilePage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
    children: [
      { path: 'forgot-password', element: <AuthPage /> },
      { path: 'verification', element: <AuthPage /> },
      { path: 'reset-password', element: <AuthPage /> },
    ],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      // { index: true, element: <MainPage /> },
      { path: "home-page", element: <MainPage /> },
      { path: "students", element: <StudentsPage /> },
      { path: "employees", element: <EmployeesPage /> },
      { path: "courses", element: <CoursePage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "waiting-list", element: <WaitingListPage /> },
      { path: "archive", element: <ArchivePage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
