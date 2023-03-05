import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react"

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
    name: string
    count: number
  }  