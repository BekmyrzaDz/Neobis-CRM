import { useField } from 'formik'
import { FC } from 'react'
import { SelectProps } from './MySelect.props'
import { clsx } from 'clsx'

import styles from './MySelect.module.scss'

const MySelect: FC<SelectProps> = ({ label, options, className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={props.name}>{label}</label>
      <select className={styles.select} {...props} {...field}>
        {options && options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </select>
      {meta.touched && meta.error ? (
        <small className={styles.error}>{meta.error}</small>
      ) : null}
    </div>
  )
}

export default MySelect
