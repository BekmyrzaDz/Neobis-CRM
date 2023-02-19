import { FC } from "react"
import { InputProps } from "./Button.props"
import styles from "./Button.module.scss"
import { clsx } from "clsx"

const IconButton: FC<InputProps> = ({ className, icon, ...props }) => {
  return (
    <button className={clsx(styles.button, className)}>
      <a className={styles.link} href="#">
        <div className={styles.icon}>{icon}</div>
      </a>
    </button>
  )
}

export default IconButton
