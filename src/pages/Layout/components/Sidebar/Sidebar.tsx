import { useId } from "react"
import styles from "./Sidebar.module.scss"
import logo from "../../../../assets/images/logo.svg"
import HomeSvgComponent from "./components/Svg/HomeSvgComponent"
import StudentSvgComponent from "./components/Svg/StudentSvgComponet"
import EmployeeSvgComponent from "./components/Svg/EmployeeSvgComponent"
import CourseSvgComponent from "./components/Svg/CourseSvgComponent"
import AnalyticsSvgComponent from "./components/Svg/AnalyticsSvgComponent"
import WaitingListSvgComponent from "./components/Svg/WaitingListSvgComponent"
import ArchiveSvgComponent from "./components/Svg/ArchiveSvgComponent"
import LogoutSvgComponet from "./components/Svg/LogoutSvgComponet"
import MenuButton from "./components/MenuButton/MenuButton"
import { IItems } from "./types"

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
                <MenuButton
                  key={`${menuItemId}-${index}`}
                  icon={icon}
                  name={name}
                  link={link}
                />
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
