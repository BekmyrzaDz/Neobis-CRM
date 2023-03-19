export interface IData {
  students: IStudent[]
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

export interface IStudent {
  time: string
  id: number
  first_name: string
  last_name: string
  surname?: string
  notes?: string
  phone: string
  laptop?: boolean
  department: IDepartment
  came_from: string
  payment_method?: IPaymentMethod
  status?: string
}

export interface IDepartment {
  id: number
  name: string
}
export interface IPaymentMethod {
  id: number
  name: string
}