import { FC } from "react"
import { clsx } from "clsx"
import { TextareaProps } from "./Input.props"
import styles from "./Input.module.scss"
import { useField } from "formik"

const Textarea: FC<TextareaProps> = ({ className, label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={clsx(styles.box, className)}>
      <label className={styles.textareaLabel}>
        {label}
        <span>*</span>
      </label>
      <textarea
        className={styles.textarea}
        placeholder={props.placeholder}
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <small className={styles.error}>{meta.error}</small>
      ) : null}
    </div>
  )
}

export default Textarea
