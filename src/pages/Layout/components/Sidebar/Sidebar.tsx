import { NavLink } from "react-router-dom"
import { useId } from "react"
import styles from "./Sidebar.module.scss"
import logo from "../../../../assets/images/logo.svg"
import HomeSvgComponent from "./components/HomeSvgComponent"
import StudentSvgComponent from "./components/StudentSvgComponet"
import EmployeeSvgComponent from "./components/EmployeeSvgComponent"
import CourseSvgComponent from "./components/CourseSvgComponent"
import AnalyticsSvgComponent from "./components/AnalyticsSvgComponent"
import WaitingListSvgComponent from "./components/WaitingListSvgComponent"
import ArchiveSvgComponent from "./components/ArchiveSvgComponent"
import LogoutSvgComponet from "./components/LogoutSvgComponet"
import MenuButton from "./components/MenuButton/MenuButton"

interface IItems {
  icon: JSX.Element
  name: string
  link: string
}

const menuItems: IItems[] = [
  {
    icon: <HomeSvgComponent />,
    name: "Главный экран",
    link: "home-page",
  },
  { icon: <StudentSvgComponent />, name: "Студенты", link: "students" },
  { icon: <EmployeeSvgComponent />, name: "Сотрудники", link: "employees" },
  { icon: <CourseSvgComponent />, name: "Курсы", link: "courses" },
  { icon: <AnalyticsSvgComponent />, name: "Аналитика", link: "analytics" },
  {
    icon: <WaitingListSvgComponent />,
    name: "Лист ожидания",
    link: "waiting-list",
  },
  { icon: <ArchiveSvgComponent />, name: "Архив", link: "archive" },
]

const Sidebar = () => {
  const menuItemId = useId()

  const setActive = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? styles.active : styles.link
  }

  return (
    <aside>
      <nav className={styles.sidebar}>
        <header className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="logo" />
        </header>

        <div className={styles.menuBar}>
          <div className={styles.menu}>
            <ul className={styles.menuLinks}>
              {menuItems?.map(({ icon, name, link }, index) => (
                <li className={styles.menuLink} key={`${menuItemId}-${index}`}>
                  <NavLink className={setActive} to={link}>
                    <div className={styles.menuIcon}>{icon}</div>
                    <span className={styles.text}>{name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.bottomContent}>
            <div className={styles.logout}>
              <a className={styles.logoutLink} href="#">
                <div className={styles.logoutIcon}>
                  <LogoutSvgComponet />
                </div>
                <span className={styles.logoutText}>Выйти</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
