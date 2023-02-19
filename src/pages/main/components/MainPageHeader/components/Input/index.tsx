import { FC } from "react"
import { InputProps } from "./Input.props"
import styles from "./Input.module.scss"
import { clsx } from "clsx"

const Input: FC<InputProps> = ({ className, icon, ...props }) => {
  return (
    <div className={clsx(styles.search, className)}>
      {icon}
      <input
        className={styles.input}
        {...props}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default Input
