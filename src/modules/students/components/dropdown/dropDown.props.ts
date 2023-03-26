export interface IDropdownOption {
  label: string
  value: any
}

export interface DropdownButtonProps {
  options: IDropdownOption[]
  defaultOption?: IDropdownOption
  onSelect: (option: IDropdownOption) => void
}