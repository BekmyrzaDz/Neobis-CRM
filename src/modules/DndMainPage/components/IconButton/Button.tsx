import React, { FC } from "react"
import clsx from "clsx"
import styles from "./Button.module.scss"

interface Props {
  icon: string
  color?: string
  hoverColor?: string
  isDragging?: boolean
  onClick?: () => void
}

const Button: FC<Props> = ({
  icon,
  color,
  hoverColor,
  isDragging,
  ...props
}) => {
  const buttonDefaultColors = clsx(styles.fill, {
    [styles.violet]: color?.toLowerCase() === "violet",
    [styles.red]: color?.toLowerCase() === "red",
    [styles.green]: hoverColor?.toLowerCase() === "green",
    [styles.greenIsDragging]: isDragging,
  })

  return (
    <div className={buttonDefaultColors} {...props}>
      <img className={styles.icon} src={icon} alt="icon" />
    </div>
  )
}

export default Button
