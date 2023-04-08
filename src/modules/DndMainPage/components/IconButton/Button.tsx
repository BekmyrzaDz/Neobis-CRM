import React, { FC } from "react"
import clsx from "clsx"
import styles from "./Button.module.scss"

interface Props {
  icon: string
  color?: string
  hoverColor?: string
}

const Button: FC<Props> = ({ icon, color, hoverColor, ...props }) => {
  const buttonDefaultColors = clsx(styles.fill, {
    [styles.violet]: color?.toLowerCase() === "violet",
    [styles.red]: color?.toLowerCase() === "red",
    [styles.green]: hoverColor?.toLowerCase() === "green",
  })

  const buttonHoverColors = clsx(styles.fill, {
    [styles.green]: hoverColor?.toLowerCase() === "green",
  })

  return (
    <div className={buttonDefaultColors}>
      <img className={styles.icon} src={icon} alt="icon" />
    </div>
  )
}

export default Button
