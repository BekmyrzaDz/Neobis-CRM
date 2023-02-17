interface IProps {
  color?: string
}

const SvgComponent = (props: IProps) => {
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
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM7 7h2v2H7V7Zm0 4h2v2H7v-2Zm0 4h2v2H7v-2Zm10 2h-6v-2h6v2Zm0-4h-6v-2h6v2Zm0-4h-6V7h6v2Z"
        fill={color}
      />
    </svg>
  )
}

export default SvgComponent
