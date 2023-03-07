interface IProps {
  color?: string
}

const SearchSvgComponent = (props: IProps) => {
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
        d="M12.667 4a8.667 8.667 0 0 1 8.666 8.667c0 2.146-.786 4.12-2.08 5.64l.36.36h1.054l6.666 6.666-2 2-6.666-6.666v-1.054l-.36-.36a8.688 8.688 0 0 1-5.64 2.08 8.667 8.667 0 1 1 0-17.333Zm0 2.667c-3.334 0-6 2.666-6 6 0 3.333 2.666 6 6 6 3.333 0 6-2.667 6-6 0-3.334-2.667-6-6-6Z"
        fill={color}
      />
    </svg>
  )
}

export default SearchSvgComponent
