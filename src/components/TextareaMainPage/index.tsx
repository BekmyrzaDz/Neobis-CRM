import { FC } from "react"
import { clsx } from "clsx"
import { TextareaProps } from "./Input.props"
import styles from "./Input.module.scss"

const Textarea: FC<TextareaProps> = ({ className, label, ...props }) => {
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
      />
    </div>
  )
}

export default Textarea
