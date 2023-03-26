import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export interface ProfileIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  avatar: string
  text: string
}
