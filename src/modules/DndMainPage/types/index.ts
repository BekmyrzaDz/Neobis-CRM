export interface IClient {
  index: number | undefined
  time: string
  id: string
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