import React, { FC } from "react"
import { useField } from "formik"
import clsx from "clsx"
import { InputProps } from "./index.props"
import styles from "./index.module.scss"

const MyCheckbox: FC<InputProps> = ({ reasons, className, ...props }) => {
  const [field, meta] = useField(props)
  console.log(field)
  console.log(props)

  return (
    <div className={clsx(styles.wrapper, className)}>
      {reasons.map((reason) => (
        <div key={reason.key} className={styles.wrap}>
          <div className={styles.cntr}>
            {/* <label className={clsx(styles.cbx, styles.checkbox)}> */}
            <input
              type="checkbox"
              className={styles.hiddenXsUp}
              {...field}
              {...props}
              // checked={field.value.includes(reason.value)}
              value={reason.value}
              id={reason.key}
              // id={styles["cbx"]}
            />
            {/* <span className={styles.fake}></span> */}
            {/* </label> */}
            {/* <label htmlFor={styles["cbx"]} className={styles.checkbox}></label> */}
          </div>
          <p className={styles.reason}>{reason.key}</p>
        </div>
      ))}
      {meta.touched && meta.error ? (
        <small className={styles.error}>{meta.error}</small>
      ) : null}
    </div>
    // <div className={clsx(styles.wrapper, className)}>
    //   {reasons.map((reason) => (
    //     <div key={reason.key} className={styles.wrap}>
    //       <div className={styles.cntr}>
    //         <input
    //           type="checkbox"
    //           className={styles.hiddenXsUp}
    //           {...field}
    //           {...props}
    //           value={reason.value}
    //           id={styles["cbx"]}
    //         />
    //         <label htmlFor={styles["cbx"]} className={styles.checkbox}></label>
    //       </div>
    //       <p className={styles.reason}>{reason.key}</p>
    //     </div>
    //   ))}
    //   {meta.touched && meta.error ? (
    //     <small className={styles.error}>{meta.error}</small>
    //   ) : null}
    // </div>
  )
}

export default MyCheckbox
