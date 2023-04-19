// Популярный источник
export interface IPopularSource {
  name: string
  percent_value: number
  color: string
}

// Популярный департамент
export interface IPopularDepartment {
  name: string
  quantity: number
  color: string
}

// Причина ухода
export interface ILeavingReason {
  reason: string
  percent_value: number
  color: string
}

// Статус обработки клиентов
export interface ISingleDepartment {
  name: string
  num_students: number
  color: string
}

export interface IRequestStatus {
  name: string
  departments: ISingleDepartment[]
}

// Redux init state
export interface IInititalState {
  requestStatus: IRequestStatus[]
  popularSource: IPopularSource[]
  popularDepartment: IPopularDepartment[]
  leavingReason: ILeavingReason[]
  isLoading: boolean
  isError: boolean
}
