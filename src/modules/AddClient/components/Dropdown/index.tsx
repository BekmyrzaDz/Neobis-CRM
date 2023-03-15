export interface IDepartmentOptions {
  id: number
  name: string
}

export interface IDropdown<T> {
  label: string
  options: IDepartmentOptions[]
  selected: IDepartmentOptions
  setSelected: React.Dispatch<React.SetStateAction<IDepartmentOptions>>
}
