import { NavLink } from "react-router-dom"
import { useId } from "react"
import styles from "./Sidebar.module.scss"
import logo from "../../../../assets/images/logo.svg"
import logoSmall from "../../../../assets/images/logo-small.svg"
import arrowLeft from "../../assets/image/arrow-left.svg"
import arrowRight from "../../assets/image/arrow-right.svg"
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

interface IProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ isOpen, setIsOpen }: IProps) => {
  const menuItemId = useId()

  const setActive = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? styles.active : styles.link
  }

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <aside>
      <nav className={`${styles.sidebar} ${isOpen ? styles.close : ""}`}>
        <header className={styles.logo}>
          <img
            className={styles.logoImg}
            src={isOpen ? logoSmall : logo}
            alt="logo"
          />
        </header>

        <img
          className={styles.toggle}
          onClick={toggleSidebar}
          src={isOpen ? arrowRight : arrowLeft}
          alt="arrow-left"
        />

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
                // <MenuButton icon={icon} name={name} link={link} />
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
