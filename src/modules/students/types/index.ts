export type TDepartment = {
  name: string
}

export type TCameFrom = {
  id: number
  name: string
}

export interface IStudentOnStudy {
  id: number
  first_name: string
  last_name: string
  surname: string
  phone: string
  came_from: TCameFrom
  department: TDepartment
  learning_status: number
  on_request: boolean
  is_archive: boolean
  laptop: boolean
  payment_status: string
  notes: string
}

// Redux students-on-study state
export interface IStudentOnStudyState {
  studentsOnStudy: IStudentOnStudy[]
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}
