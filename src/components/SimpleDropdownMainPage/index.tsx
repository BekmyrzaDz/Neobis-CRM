export interface IDropdown {
  label: string
  name?: string
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}
