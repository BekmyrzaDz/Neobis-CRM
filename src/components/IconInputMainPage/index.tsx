import { FC } from "react"
import { InputProps } from "./Input.props"
import styles from "./Input.module.scss"
import { clsx } from "clsx"
import { useField } from "formik"

const PhoneInput: FC<InputProps> = ({ className, label, icon, ...props }) => {
  const [field, meta] = useField(props)
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
          {...field}
        />
      </div>
      {meta.touched && meta.error ? (
        <small className={styles.error}>{meta.error}</small>
      ) : null}
    </div>
  )
}

export default PhoneInput
