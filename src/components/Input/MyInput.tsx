import { useField } from 'formik'
import { FC } from 'react'
import { InputProps } from './MyInput.props'
import { clsx } from 'clsx'

import styles from './MyInput.module.scss'

const Input: FC<InputProps> = ({ className, label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={props.name}>{label}</label>
      <input
        className={styles.input}
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

export default Input
