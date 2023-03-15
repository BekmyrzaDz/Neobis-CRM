import { FC } from "react"
import { InputProps } from "./Input.props"
import styles from "./Input.module.scss"
import { clsx } from "clsx"

const Input: FC<InputProps> = ({ className, label, ...props }) => {
  return (
    <div className={clsx(styles.box, className)}>
      <label className={styles.inputLabel}>
        {label}
        <span>*</span>
      </label>
      <input
        className={styles.input}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  )
}

export default Input
