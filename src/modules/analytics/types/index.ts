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
