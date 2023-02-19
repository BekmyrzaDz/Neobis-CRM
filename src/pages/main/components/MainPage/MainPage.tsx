import MainPageHeader from "../MainPageHeader/MainPageHeader"
import styles from "./MainPage.module.scss"

const MainPage = () => {
  return (
    <div className={styles.main}>
      <MainPageHeader />
      <div className="text">Main</div>
    </div>
  )
}

export default MainPage
