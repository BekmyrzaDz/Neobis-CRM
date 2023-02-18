import { createBrowserRouter } from "react-router-dom"
import ArchivePage from "../pages/archive/components/ArchivePage"

import AuthPage from "../pages/auth/AuthPage"
import CoursePage from "../pages/course/components/CoursePage"
import EmployeePage from "../pages/employee/components/EmployeePage"
import Layout from "../pages/Layout/components/Layout"
import MainPage from "../pages/main/components/MainPage/MainPage"
import StudentsPage from "../pages/students/components/StudentsPage"
import WaitingListPage from "../pages/waitingList/components/WaitingListPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    children: [
      { path: "forgot-password", element: <AuthPage /> },
      { path: "verification", element: <AuthPage /> },
      { path: "reset-password", element: <AuthPage /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "students", element: <StudentsPage /> },
      { path: "employees", element: <EmployeePage /> },
      { path: "courses", element: <CoursePage /> },
      { path: "analytics", element: <EmployeePage /> },
      { path: "waiting-list", element: <WaitingListPage /> },
      { path: "archive", element: <ArchivePage /> },
    ],
  },
])
