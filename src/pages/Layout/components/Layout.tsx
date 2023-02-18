import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"

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

const closeStyle = {
  position: "relative",
  left: "58px",
  height: "100vh",
  width: "calc(100% - 58px)",
  transition: "all 0.5s ease",
}

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div style={isOpen ? closeStyle : openStyle}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
