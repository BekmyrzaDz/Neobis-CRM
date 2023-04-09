// Redux students-on-study state
export interface IStudentOnStudyState {
  studentsOnStudy: IStudentOnStudy[] | []
  studentOnStudy: IStudentOnStudy | {}
  isLoading: boolean
  isError: boolean
}

export interface IStudentOnStudy {
  id: number
  first_name: string
  last_name: string
  surname: string
  phone: string
  came_from: {
    id: number
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

// get all students props
export interface IGetAllStudentsOnStudy {
  token: string
  departmentFilter: string
}

// get student by ID
export interface IGetStudentsOnStudyById {
  token: string
  id?: string
}

// delete student by ID
export interface IDeleteStudentsOnStudyById {
  token: string
  id?: string
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

// Edit student on study
export interface IEditStudentonStudy extends ICreateStudentonStudy {
  id: number
}
