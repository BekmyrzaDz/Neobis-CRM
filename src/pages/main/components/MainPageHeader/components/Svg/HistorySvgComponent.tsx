interface IProps {
  color?: string
}

const HistorySvgComponent = (props: IProps) => {
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
        d="M18 10.667h-2v6.666l5.707 3.387.96-1.613L18 16.333v-5.666ZM17.333 4a12 12 0 0 0-12 12h-4l5.28 5.373L12 16H8a9.333 9.333 0 1 1 9.333 9.333 9.258 9.258 0 0 1-6.586-2.746L8.853 24.48a11.862 11.862 0 0 0 8.48 3.52 12 12 0 0 0 0-24Z"
        fill={color}
      />
    </svg>
  )
}

export default HistorySvgComponent
