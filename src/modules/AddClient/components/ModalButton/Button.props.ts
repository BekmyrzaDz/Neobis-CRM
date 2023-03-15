import { DetailedHTMLProps } from "react"

export interface ButtonProps
  extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
   {
    name: string
  }  