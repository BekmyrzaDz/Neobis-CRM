import { FC } from "react"
import { NavLink } from "react-router-dom"
import { IItems } from "../../types"
import styles from "./MenuButton.module.scss"

const MenuButton: FC<IItems> = ({ icon, name, link }) => {
  const setActive = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? styles.active : styles.link
  }

  return (
    <li className={styles.menuLink}>
      <NavLink className={setActive} to={link}>
        <div className={styles.menuIcon}>{icon}</div>
        <span className={styles.text}>{name}</span>
      </NavLink>
    </li>
  )
}

export default MenuButton
