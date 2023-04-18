export interface IOptions {
  icon: any
  name: string
}

export interface IDepartmentOptions {
  id: number
  name: string
}

// Create types
export interface ICreateStudent {
  first_name: string
  last_name: string
  notes: string
  phone: string
  laptop: string | boolean
  department: {
    name: string
  }
  came_from: {
    name: string
  }
  payment_method: {
    name: string
  }
}

export interface ICreateBaseStudent {
  first_name: string
  last_name: string
  notes: string
  phone: string
}

export interface ICreateStudentData {
  id: number
  createStudent: ICreateStudent
}

export interface ICreateStudentState {
  newClient: ICreateStudent | null,
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
}

// Student types
export interface IStudent {
  request_date?: string
  id?: number
  first_name: string
  last_name: string
  notes?: string
  phone: string
  laptop: boolean
  department: {
    name: string
  }
  came_from: {
    id: number
    name: string
  }
  payment_method: {
    id: number
    name: string
  }
  status?: {
    id: number
    name: string
  }
  reason?: number[] | null
  on_request?: boolean
  is_archive?: boolean
}