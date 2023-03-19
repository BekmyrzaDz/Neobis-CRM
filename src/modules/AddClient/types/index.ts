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