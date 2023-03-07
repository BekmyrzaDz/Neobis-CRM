interface IProps {
  color?: string
}

const CalendarSvgComponent = (props: IProps) => {
  const { color } = props

  return (
    <svg
      width={32}
      height={32}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 13.333V16H9.333v-2.667H12Zm5.333 0V16h-2.666v-2.667h2.666Zm5.334 0V16H20v-2.667h2.667ZM25.333 4A2.667 2.667 0 0 1 28 6.667v18.666A2.667 2.667 0 0 1 25.333 28H6.667A2.667 2.667 0 0 1 4 25.333V6.667A2.667 2.667 0 0 1 6.667 4H8V1.333h2.667V4h10.666V1.333H24V4h1.333Zm0 21.333V10.667H6.667v14.666h18.666ZM12 18.667v2.666H9.333v-2.666H12Zm5.333 0v2.666h-2.666v-2.666h2.666Zm5.334 0v2.666H20v-2.666h2.667Z"
        fill={color}
      />
    </svg>
  )
}

export default CalendarSvgComponent
