// Redux students-on-study state
export interface IStudentOnStudyState {
  studentsOnStudy: IStudentOnStudy[] | []
  studentOnStudy: IStudentOnStudy | {}
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

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
  on_request: boolean
  is_archive: boolean
  laptop: boolean
  payment_status: string
  notes: string
}

// get all students props
export interface IGetAllStudentsOnStudy {
  token: string
  departmentFilter: string
}

// Create student on study POST
export interface ICreateStudentonStudy {
  token: string
  first_name: string
  last_name: string
  surname: string
  phone: string
  came_from: {
    name: string
  }
  department: {
    name: string
  }
  on_request: boolean
  is_archive: boolean
  laptop: boolean
  payment_status: number
  notes: string
}
