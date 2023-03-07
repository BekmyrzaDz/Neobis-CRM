interface IProps {
  color?: string
}

const HomeSvgComponent = (props: IProps) => {
  const { color } = props
  return (
    <svg
      width={24}
      height={24}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z" fill={color} />
    </svg>
  )
}

export default HomeSvgComponent
