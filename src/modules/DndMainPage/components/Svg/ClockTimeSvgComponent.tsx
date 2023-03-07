interface IProps {
  color?: string
}

const ClockTimeSvgComponent = (props: IProps) => {
  const { color } = props
  return (
    <svg
      width={16}
      height={16}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 1.333c-3.666 0-6.666 3-6.666 6.667s3 6.667 6.667 6.667c3.666 0 6.666-3 6.666-6.667s-3-6.667-6.666-6.667Zm2.867 8.8L7.334 8.2V4.667h1V7.6l3 1.667-.467.866Z"
        fill={color}
      />
    </svg>
  )
}

export default ClockTimeSvgComponent
