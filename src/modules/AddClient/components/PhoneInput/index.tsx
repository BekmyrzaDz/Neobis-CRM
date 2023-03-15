import { FC } from "react"
import { InputProps } from "./Input.props"
import styles from "./Input.module.scss"
import { clsx } from "clsx"

const PhoneInput: FC<InputProps> = ({ className, label, icon, ...props }) => {
  return (
    <div className={clsx(styles.box, className)}>
      <label className={styles.inputLabel}>
        {label}
        <span>*</span>
      </label>
      <div className={styles.group}>
        <div className={styles.icon}>{icon}</div>
        <input
          className={styles.input}
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    </div>
  )
}

export default PhoneInput
