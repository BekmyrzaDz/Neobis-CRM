import { FC } from "react"
import { ButtonProps } from "./Button.props"
import styles from "./Button.module.scss"
import { clsx } from "clsx"
import { Link } from "react-router-dom"

const ProfileButton: FC<ButtonProps> = ({
  className,
  icon,
  name,
  ...props
}) => {
  return (
    <Link to="/profile" className={clsx(styles.button, className)}>
      <div className={styles.icon}>
        <img
          style={{ width: "32px", height: "32px", borderRadius: "100%" }}
          src={icon}
          alt="avatar"
        />
      </div>
      <span className={styles.text}>{name}</span>
    </Link>
  )
}

export default ProfileButton
