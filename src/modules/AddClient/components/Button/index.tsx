import { FC } from "react"
import { clsx } from "clsx"
import { ButtonProps } from "./Button.props"
import styles from "./Button.module.scss"

const Button: FC<ButtonProps> = ({
  className,
  icon,
  name,
  active,
  setActive,
  ...props
}) => {
  console.log()
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={() => setActive(true)}
    >
      <div className={styles.icon}>{icon}</div>
      <span className={styles.text}>{name}</span>
    </button>
  )
}

export default Button
