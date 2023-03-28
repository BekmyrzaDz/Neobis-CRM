import { useId, useState, useEffect } from "react"
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
import { Navigate, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../../hooks/redux"
import CashSvgComponent from "./components/Svg/CashSvgComponents"

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
  { icon: <ArchiveSvgComponent />, name: "Архив", link: "archive" },
  {
    icon: <CashSvgComponent />,
    name: "Оплата",
    link: "payment",
  },
]

const Sidebar = () => {
  const menuItemId = useId()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("profile")
    navigate("/")
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
              <div className={styles.logoutLink} onClick={logout}>
                <div className={styles.logoutIcon}>
                  <LogoutSvgComponet />
                </div>
                <span className={styles.logoutText}>Выйти</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
