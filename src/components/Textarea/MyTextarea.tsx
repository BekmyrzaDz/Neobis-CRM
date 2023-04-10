import { useField } from 'formik'
import { FC } from 'react'
import { TextareaProps } from './MyTextarea.props'
import { clsx } from 'clsx'

import styles from './MyTextarea.module.scss'

const MyTextarea: FC<TextareaProps> = ({ className, label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={props.name}>{label}</label>
      <textarea
        className={styles.textarea}
        {...props}
        {...field}
        placeholder={props.placeholder}
      />

      {meta.touched && meta.error ? (
        <small className={styles.error}>{meta.error}</small>
      ) : null}
    </div>
  )
}

export default MyTextarea
