import { FC } from "react"
import { InputProps } from "./Input.props"
import styles from "./Input.module.scss"
import { clsx } from "clsx"

const SearchInput: FC<InputProps> = ({ className, icon, ...props }) => {
  return (
    <div className={clsx(styles.search, className)}>
      <img src={icon} alt="icon" />
      <input
        className={styles.input}
        {...props}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default SearchInput
