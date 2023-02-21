import { FC } from "react"
import { InputProps } from "./Button.props"
import styles from "./Button.module.scss"
import { clsx } from "clsx"

const Button: FC<InputProps> = ({ className, count, name, ...props }) => {
  return (
    <button className={clsx(styles.button, className)}>
      <div className={styles.link}>
        <span className={styles.text}>{name}</span>
        <div className={styles.countBox}>
          <div className={styles.count}>{count}</div>
        </div>
      </div>
    </button>
  )
}

export default Button
