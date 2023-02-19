import Input from "./components/Input"
import SearchSvgComponent from "./components/Svg/SearchSvgComponent"
import styles from "./MainPageHeader.module.scss"

const MainPageHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <Input
            className={styles.search}
            name="search"
            id="search"
            type="search"
            alt="search"
            placeholder="Поиск"
            icon={<SearchSvgComponent />}
          />

          <div className={styles.group}></div>
        </div>
      </div>
    </header>
  )
}

export default MainPageHeader
