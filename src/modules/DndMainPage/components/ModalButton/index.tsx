import { FC } from "react"
import { clsx } from "clsx"
import { ButtonProps } from "./Button.props"
import styles from "./Button.module.scss"

const ModalButton: FC<ButtonProps> = ({ className, name, ...props }) => {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      <span className={styles.text}>{name}</span>
    </button>
  )
}

export default ModalButton
