// Redux profile state
export interface IStudentState {
  student: IStudent[] | null
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
  id: number
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
  // time?: string
  id: number
  first_name: string
  last_name: string
  surname?: string
  notes: string
  phone: string
  laptop: boolean
  department: IDepartment
  came_from: ISource
  payment_method?: IPaymentMethod
  status?: IStatus
  paid: boolean
  reason: IReason | null
  on_request: boolean
}

// export interface IStudent {
//   time: string
//   id: number
//   first_name: string
//   last_name: string
//   surname?: string
//   notes?: string
//   phone: string
//   laptop?: boolean
//   department: IDepartment
//   came_from: string
//   payment_method?: IPaymentMethod
//   status?: string
// }

// export interface IDepartment {
//   id: number
//   name: string
// }
// export interface IPaymentMethod {
//   id: number
//   name: string
// }