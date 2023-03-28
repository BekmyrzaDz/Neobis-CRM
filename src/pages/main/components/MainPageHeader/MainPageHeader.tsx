import IconButton from "./components/IconButton"
import SearchSvgComponent from "./components/Svg/SearchSvgComponent"
import CalendarSvgComponent from "./components/Svg/CalendarSvgComponent"
import styles from "./MainPageHeader.module.scss"
import ProfileButton from "../../../../components/ProfileButton"
import { FC } from "react"
import { AddClient } from "../../../../modules/AddClient"
import { useAppSelector } from "../../../../hooks/redux"
import SearchInput from "../../../../components/SearchInput"

const MainPageHeader: FC = () => {
  const state = useAppSelector((state) => state.profile.profile)
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <SearchInput
            className={styles.search}
            name="search"
            id="search"
            type="search"
            alt="search"
            placeholder="Поиск"
            icon={<SearchSvgComponent />}
          />

          <div className={styles.group}>
            <AddClient />
            <IconButton
              className={styles.item}
              icon={<CalendarSvgComponent />}
            />

            <div className={styles.profile}>
              <ProfileButton
                className={styles.item}
                icon={<img className={styles.img} src={state?.image} />}
                name={`${state?.first_name} ${state?.last_name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainPageHeader
