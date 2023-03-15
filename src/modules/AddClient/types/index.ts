export interface IModal {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children?: React.ReactNode
}