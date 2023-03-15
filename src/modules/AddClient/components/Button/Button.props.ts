import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react"

export interface ButtonProps
  extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
   {

    name: string
    icon: React.ReactNode
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
  }  