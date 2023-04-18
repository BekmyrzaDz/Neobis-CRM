import React, { FC } from "react"
import clsx from "clsx"
import styles from "./Button.module.scss"
import { IconButtonProps } from "./Button.props"

const Button: FC<IconButtonProps> = ({
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
    <button className={buttonDefaultColors} {...props}>
      <img className={styles.icon} src={icon} alt="icon" />
    </button>
  )
}

export default Button
