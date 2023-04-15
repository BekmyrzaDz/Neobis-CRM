export interface IStudentState {
  student?: IStudent[] | null
  newStudent?: IStudent | null
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

export interface IData {
  students: IStudent[] | null
  columns: IColumns
  columnOrder: string[]
}

export interface IColumns {
  [key: string]: IColumn
}

export interface IColumn {
  id: string
  title: string
  studentIds: number[] | never[]
}

export interface IDepartment {
  id?: number
  name: string
}
export interface IPaymentMethod {
  id: number
  name: string
}

export interface IStatus {
  id: number
  name: string
}

export interface ISource {
  id: number
  name: string
}

export interface IReason {
  id: number
  name: string
}

export interface IStudent {
  request_date?: string
  id?: number
  first_name: string
  last_name: string
  surname?: string
  notes?: string
  phone: string
  laptop: boolean
  department: IDepartment
  came_from: ISource
  payment_method: IPaymentMethod
  status?: IStatus
  paid?: boolean
  reason?: IReason | null
  on_request?: boolean
  is_archive?: boolean
}

// Update types
export interface IUpdateDepartment {
  name: string
}
export interface IUpdatePaymentMethod {
  name: string
}

export interface IUpdateStatus {
  name: string
}

export interface IUpdateSource {
  name: string
}

export interface IUpdateReason {
  name: string
}
export interface IUpdateStudent {
  first_name?: string
  last_name?: string
  surname?: string
  notes?: string
  phone?: string
  laptop?: string | boolean
  department?: IUpdateDepartment
  came_from?: IUpdateSource
  payment_method?: IUpdatePaymentMethod
  status?: IUpdateStatus
  paid?: boolean
  on_request?: boolean
  is_archive?: boolean
}

export interface IUpdateStudentData {
  id: number
  updateStudent: IUpdateStudent
}

// Change student types
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
  laptop: string | boolean
  department: ICreateDepartment
  came_from: ICreateSource
  payment_method?: ICreatePaymentMethod
}