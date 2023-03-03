import Button from "./components/Button"
import IconButton from "./components/IconButton"
import Input from "./components/Input"
import PlusSvgComponent from "./components/Svg/PlusSvgComponent"
import SearchSvgComponent from "./components/Svg/SearchSvgComponent"
import CalendarSvgComponent from "./components/Svg/CalendarSvgComponent"
import styles from "./MainPageHeader.module.scss"
import HistorySvgComponent from "./components/Svg/HistorySvgComponent"
import ProfileButton from "../../../../components/ProfileButton"
import avatar from "./assets/image/avatar.svg"
import AvatarSvgComponent from "./components/Svg/AvatarSvgComponent"

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

          <div className={styles.group}>
            <Button
              className={styles.item}
              icon={<PlusSvgComponent />}
              name="Добавить заявку"
            />

            <IconButton
              className={styles.item}
              icon={<CalendarSvgComponent />}
            />

            <IconButton
              className={styles.item}
              icon={<HistorySvgComponent />}
            />

            <div className={styles.profile}>
              <ProfileButton
                className={styles.item}
                icon={<AvatarSvgComponent />}
                name="Бексултан Маратов "
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainPageHeader
