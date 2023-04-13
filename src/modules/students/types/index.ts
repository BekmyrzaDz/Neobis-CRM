// Redux students-on-study state
export interface IStudentOnStudyState {
  studentsOnStudy: IStudentOnStudy[] | []
  studentsOnStudyForFilters: IStudentOnStudy[] | []
  studentOnStudy: IStudentOnStudy | {}
  isLoading: boolean
  isError: boolean
}

export interface IStudentOnStudy {
  id: number
  first_name: string
  last_name: string
  group: string
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
  blacklist: boolean
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
  group: string
  phone: string
  came_from: {
    name: string
  }
  department: {
    name: string
  }
  on_request: boolean
  is_archive: boolean
  blacklist: boolean
  laptop: boolean
  payment_status: number
  notes: string
}

// Edit student on study
export interface IEditStudentonStudy extends ICreateStudentonStudy {
  id: number
}

// !!!!!!!!!!!!!!!!!!!!!!!!!GROUPS!!!!!!!!!!!!!!!!!!!!!

// GroupsOnStudyState
export interface GroupsOnStudyState {
  groupsOnStudy: IGroupOnStudy[] | []
  groupsOnStudyForFilters: IGroupOnStudy[] | []
  groupOnStudy: IGroupOnStudy | {}
  isLoading: boolean
  isError: boolean
}

// Single group type
export interface IGroupOnStudy {
  id: number
  name: string
  mentor: {
    id: number
    first_name: string
    last_name: string
    image: string
  }
  department: {
    name: string
  }
  students_max: number
  status: {
    id: number
    status_name: string
  }
  schedule_type: number
  classroom: {
    id: number
    name: string
  }
  is_archive: boolean
  start_at_date: string
  end_at_date: string
  start_at_time: string
  end_at_time: string
  current_students: number
}

// Get all groups type
export interface IGetAllGroupsOnStudy {
  token: string
  departmentFilter: string
}

// Create group type REQUEST_BODY
export interface ICreateGroupOnstudyREQ {
  token: string
  name: string
  mentor: {
    id: number
  }
  department: {
    name: string
  }
  students_max: number
  schedule_type: number
  classroom: {
    name: string
  }
  is_archive: boolean
  start_at_date: string
  end_at_date: string
  start_at_time: string
  end_at_time: string
}

// Create group type RESPONSE_BODY
export interface ICreateGroupOnstudyRES {
  id: number
  name: string
  mentor: {
    id: number
  }
  department: {
    name: string
  }
  students_max: number
  schedule_type: number
  classroom: {
    id: 0
    name: string
  }
  is_archive: boolean
  start_at_date: string
  end_at_date: string
  start_at_time: string
  end_at_time: string
}
