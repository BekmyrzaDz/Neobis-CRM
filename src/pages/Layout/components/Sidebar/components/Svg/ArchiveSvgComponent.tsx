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
        d="M3 3h18v4H3V3Zm1 5h16v13H4V8Zm5.5 3a.5.5 0 0 0-.5.5V13h6v-1.5a.5.5 0 0 0-.5-.5h-5Z"
        fill={color}
      />
    </svg>
  )
}

export default SvgComponent
