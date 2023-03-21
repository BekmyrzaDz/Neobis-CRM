import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import styles from "./Layout.module.scss"

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
