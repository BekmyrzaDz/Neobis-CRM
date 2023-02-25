import { ReactNode } from "react"
import AnalyticsPage from "../../analitics/components/AnalyticsPage"
import ArchivePage from "../../archive/components/ArchivePage"
import CoursePage from "../../course/components/CoursePage"
import EmployeePage from "../../employee/components/EmployeePage"
import MainPage from "../../main/components/MainPage/MainPage"
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

export const renderMainPage = (location: TLocation): ReactNode => {
  switch (location) {
    case "/home-page":
      return <MainPage />
    case "/students":
      return <StudentsPage />
    case "/employees":
      return <EmployeePage />
    case "/courses":
      return <CoursePage />
    case "/analytics":
      return <AnalyticsPage />
    case "/waiting-list":
      return <WaitingListPage />
    case "/archive":
      return <ArchivePage />
    default:
      return null
  }
}
