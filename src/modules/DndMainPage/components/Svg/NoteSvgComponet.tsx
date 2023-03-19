import { FC } from "react"

interface IProps {
  color?: string
}

const NoteSvgComponent: FC<IProps> = ({ color, ...props }) => {
  return (
    <svg
      width={32}
      height={32}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={32} height={32} rx={12} fill="#756FB3" />
      <path
        d="M25 14v-1l-6-6H9c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h6v-1.87l8.39-8.39c.44-.44 1-.68 1.61-.74Zm-7-5.5 5.5 5.5H18V8.5Zm8.85 9.69-.98.98-2.04-2.04.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72Zm-3.72-.36 2.04 2.04L19.04 26H17v-2.04l6.13-6.13Z"
        fill="#fff"
      />
    </svg>
  )
}

export default NoteSvgComponent
