import React, { FC } from "react"
import styles from "./Button.module.scss"

interface Props {
  icon: string
  color: string
}

const Button: FC<Props> = ({ icon, color, ...props }: Props) => {
  return (
    <div style={{ background: color }} className={styles.fill}>
      <img className={styles.icon} src={icon} alt="icon" {...props} />
    </div>
  )
}

export default Button
