import { ReactNode } from "react"
import AnalyticsPage from "../../analitics/components/AnalyticsPage"
import ArchivePage from "../../archive/components/ArchivePage"
import CoursePage from "../../course/components/CoursePage"
import EmployeesPage from "../../Employees/EmployeesPage"
import MainPage from "../../main/components/MainPage/MainPage"
import ProfilePage from "../../profile/ProfilePage"
import StudentsPage from "../../students/components/StudentsPage"
import WaitingListPage from "../../waitingList/components/WaitingListPage"

export type TLocation =
  | "/home-page"
  | "/students"
  | "/employees"
  | "/courses"
  | "/analytics"
  | "/waiting-list"
  | "/archive"
  | "/profile"

export const renderMainPage = (location: TLocation): ReactNode => {
  switch (location) {
    case "/home-page":
      return <MainPage />
    case "/students":
      return <StudentsPage />
    case "/employees":
      return <EmployeesPage />
    case "/courses":
      return <CoursePage />
    case "/analytics":
      return <AnalyticsPage />
    case "/waiting-list":
      return <WaitingListPage />
    case "/archive":
      return <ArchivePage />
    case "/profile":
      return <ProfilePage />
    default:
      return null
  }
}
