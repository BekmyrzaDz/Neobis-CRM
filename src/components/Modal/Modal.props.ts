import { ReactNode } from 'react'

export interface IModalProps {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
  className?: string
}
