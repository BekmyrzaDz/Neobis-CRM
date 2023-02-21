interface IProps {
  color?: string
}

const ClearSvgComponent = (props: IProps) => {
  const { color } = props

  return (
    <svg
      width={28}
      height={28}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={28} height={28} rx={10} fill="#fff" />
      <path
        d="M9 19.833a1.666 1.666 0 0 0 1.667 1.667h6.666A1.667 1.667 0 0 0 19 19.833v-10H9v10Zm1.667-8.333h6.666v8.333h-6.666V11.5Zm6.25-4.167-.834-.833h-4.166l-.834.833H8.167V9h11.666V7.333h-2.916Z"
        fill={color}
      />
    </svg>
  )
}

export default ClearSvgComponent
