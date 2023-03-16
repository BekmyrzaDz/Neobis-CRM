export interface IOptions {
  icon: any
  name: string
}

export interface IDropdown {
  label: string
  options: IOptions[]
  selected: IOptions
  setSelected: React.Dispatch<React.SetStateAction<IOptions>>
}
