import { color } from "@material-ui/system"

interface IProps {
  color?: string
}

const CashSvgComponent = (props: IProps) => {
  const { color } = props

  return (
    <svg
      width={24}
      height={24}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 6v12h10.32a6.38 6.38 0 0 1-.32-2H7a2 2 0 0 0-2-2v-4c1.11 0 2-.89 2-2h10a2 2 0 0 0 2 2v.06c.67 0 1.34.12 2 .34V6H3Zm9 3c-1.7.03-3 1.3-3 3s1.3 2.94 3 3c.38 0 .77-.08 1.14-.23.27-1.1.72-2.14 1.83-3.16C14.85 10.28 13.59 8.97 12 9Zm7 2 2.25 2.25L19 15.5V14c-1.85 0-3.06 1.96-2.24 3.62l-1.09 1.09c-1.76-2.66.14-6.21 3.33-6.21V11Zm0 11-2.25-2.25L19 17.5V19c1.85 0 3.06-1.96 2.24-3.62l1.09-1.09c1.76 2.66-.14 6.21-3.33 6.21V22Z"
        fill={color}
      />
    </svg>
  )
}

export default CashSvgComponent
