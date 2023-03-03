import { useState } from "react"
import { useLocation } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import styles from "./Layout.module.scss"
import { renderMainPage, TLocation } from "../helpers/renderMainPage"

interface IStyleOpen {
  position: string
  height: string
  left: string
  width: string
  transition: string
}

const openStyle: IStyleOpen = {
  position: "relative",
  left: "247px",
  height: "100vh",
  width: "calc(100% - 247px)",
  transition: "all 0.5s ease",
}

interface IStyleClose {
  position: string
  left: string
  height: string
  width: string
  transition: string
}

const closeStyle: IStyleClose = {
  position: "relative",
  left: "58px",
  height: "100vh",
  width: "calc(100% - 58px)",
  transition: "all 0.5s ease",
}
//  style={isOpen ? closeStyle : openStyle}

const Layout = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div>
      <Sidebar />
      <div className={styles.container}>
        {renderMainPage(currentPath as TLocation)}
      </div>
    </div>
  )
}

export default Layout
