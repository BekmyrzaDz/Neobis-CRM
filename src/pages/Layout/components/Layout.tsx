import { useLocation } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import styles from "./Layout.module.scss"
import { renderMainPage, TLocation } from "../helpers/renderMainPage"

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
