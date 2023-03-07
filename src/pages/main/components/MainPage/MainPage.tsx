import { FC } from "react"
import MainPageHeader from "../MainPageHeader/MainPageHeader"
import { DragAndDrop } from "../../../../modules/DndMainPage"
import styles from "./MainPage.module.scss"

const MainPage: FC = () => {
  return (
    <div className={styles.main}>
      <MainPageHeader />
      <DragAndDrop />
    </div>
  )
}

export default MainPage
