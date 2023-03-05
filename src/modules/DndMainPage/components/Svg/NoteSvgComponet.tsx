interface IProps {
  color?: string
}

const NoteSvgComponent = (props: IProps) => {
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
        d="M6.5 9.833V8.167h1.667v-.834a1.667 1.667 0 0 1 1.666-1.666h5V11.5l2.084-1.25L19 11.5V5.667h.833c.875 0 1.667.791 1.667 1.666v13.334c0 .875-.792 1.666-1.667 1.666h-10c-.875 0-1.666-.791-1.666-1.666v-.834H6.5v-1.666h1.667v-3.334H6.5v-1.666h1.667V9.833H6.5Zm3.333 3.334H8.167v1.666h1.666v-1.666Zm0-3.334V8.167H8.167v1.666h1.666Zm0 10v-1.666H8.167v1.666h1.666Z"
        fill={color}
      />
    </svg>
  )
}

export default NoteSvgComponent
