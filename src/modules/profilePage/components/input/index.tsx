import { useField } from 'formik'
import { FC } from 'react'
import { InputProps } from './Input.props'

import styles from './Input.module.scss'
import clsx from 'clsx'

const ProfileInput: FC<InputProps> = ({ label, className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.name} className={styles.label}>
        {label}
      </label>
      <input
        className={clsx(styles.input, className)}
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

export default ProfileInput
