import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react"

export interface TextareaProps
  extends DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label: string
  }  