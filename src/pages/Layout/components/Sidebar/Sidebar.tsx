import { useState } from "react"
import styles from "./Sidebar.module.scss"
import logo from "../../../../assets/images/logo.svg"
import arrowLeft from "../../assets/image/arrow-left.svg"
import HomeSvgComponent from "./components/HomeSvgComponent"
import StudentSvgComponent from "./components/StudentSvgComponet"
import EmployeeSvgComponent from "./components/EmployeeSvgComponent"
import CourseSvgComponent from "./components/CourseSvgComponent"
import AnalyticsSvgComponent from "./components/AnalyticsSvgComponent"
import WaitingListSvgComponent from "./components/WaitingListSvgComponent"
import ArchiveSvgComponent from "./components/ArchiveSvgComponent"
import LogoutSvgComponet from "./components/LogoutSvgComponet"
import MenuButton from "../MenuButton/MenuButton"

interface IItems {
  icon: JSX.Element
  name: string
  link: string
}

const menuItems: IItems[] = [
  { icon: <HomeSvgComponent />, name: "Главный экран", link: "/" },
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
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <header className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="logo" />
        </header>

        <img className={styles.arrowLeft} src={arrowLeft} alt="arrow-left" />

        <div className={styles.menuBar}>
          <div className={styles.menu}>
            <ul className={styles.menuLinks}>
              {menuItems?.map(({ icon, name, link }) => (
                <MenuButton icon={icon} name={name} link={link} />
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
