import { FC } from "react"
import { InputProps } from "./Button.props"
import styles from "./Button.module.scss"
import { clsx } from "clsx"

const ProfileButton: FC<InputProps> = ({ className, icon, name, ...props }) => {
  return (
    <button className={clsx(styles.button, className)}>
      <a className={styles.link} href="#">
        <div className={styles.icon}>{icon}</div>
        <span className={styles.text}>{name}</span>
      </a>
    </button>
  )
}

export default ProfileButton
