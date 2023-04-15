import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string
  icon?: string
  onClick?: () => void
}
