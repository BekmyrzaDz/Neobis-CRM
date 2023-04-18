import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: string
  color?: string
  hoverColor?: string
  isDragging?: boolean
}