import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export interface AuthButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
}
