import { NavLink } from "react-router-dom"
import styles from "./MenuButton.module.scss"

interface IProps {
  icon: JSX.Element
  name: string
  link: string
}

const MenuButton = (props: IProps) => {
  const { icon, name, link } = props

  const setActive = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? styles.active : styles.link
  }

  return (
    <div>
      <li className={styles.menuLink}>
        <NavLink className={setActive} to={link}>
          <div className={styles.menuIcon}>{icon}</div>
          <span className={styles.text}>{name}</span>
        </NavLink>
      </li>
    </div>
  )
}

export default MenuButton
