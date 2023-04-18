import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface Reason {
  key: string
  value: number
}

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string
  reasons: Reason[]
  className?: string
}