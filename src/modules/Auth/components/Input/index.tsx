import { useField } from 'formik'
import { FC } from 'react'
import { InputProps } from './Input.props'
import styles from './Input.module.scss'
import { clsx } from 'clsx'

const Input: FC<InputProps> = ({ className, icon, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.inputWrapper}>
        <img src={icon} alt='icon' className={styles.icon} />
        <input
          className={styles.input}
          {...props}
          {...field}
          placeholder={props.placeholder}
        />
      </div>

      {meta.touched && meta.error ? (
        <small className={styles.error}>{meta.error}</small>
      ) : null}
    </div>
  )
}

export default Input
