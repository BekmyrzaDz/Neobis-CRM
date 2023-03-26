export interface IModal {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children?: React.ReactNode
}

export interface IOptions {
  icon: any
  name: string
}

export interface IDepartmentOptions {
  id: number
  name: string
}

// Create types
export interface ICreateDepartment {
  name: string
}
export interface ICreatePaymentMethod {
  name: string
}

export interface ICreateStatus {
  name: string
}

export interface ICreateSource {
  name: string
}

export interface IUpdateReason {
  name: string
}
export interface ICreateStudent {
  first_name: string
  last_name: string
  surname?: string
  notes: string
  phone: string
  laptop: boolean
  department: ICreateDepartment
  came_from: ICreateSource
  payment_method?: ICreatePaymentMethod
  paid: boolean
  on_request: boolean
  is_archive: boolean
}

export interface ICreateBaseStudent {
  first_name: string
  last_name: string
  surname?: string
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