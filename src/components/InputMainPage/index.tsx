import { FC } from "react"
import { InputProps } from "./Input.props"
import styles from "./Input.module.scss"
import { clsx } from "clsx"
import { useField } from "formik"

const Input: FC<InputProps> = ({ className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className={clsx(styles.box, className)}>
        <label className={styles.inputLabel}>
          {props.label}
          <span>*</span>
        </label>
        <input className={styles.input} {...props} {...field} />
        {meta.touched && meta.error ? (
          <small className={styles.error}>{meta.error}</small>
        ) : null}
      </div>
    </>
  )
}

export default Input
