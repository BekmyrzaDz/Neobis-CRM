import styles from "./MainPageHeader.module.scss"
import ProfileButton from "../../../../components/ProfileButton"
import { FC, useEffect } from "react"
import { AddClient } from "../../../../modules/AddClient"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import SearchInput from "../../../../components/SearchInput"
import imgAvatar from "./assets/image/imgAvatar.png"
import search from "./assets/image/searchIcon.svg"
import { getProfileById } from "../../../../modules/profilePage/redux/asyncActions"

const MainPageHeader: FC = () => {
  const dispatch = useAppDispatch()
  const id = useAppSelector((state) => state.auth.user?.id)
  const profile = useAppSelector((state) => state.profile.profile)

  useEffect(() => {
    dispatch(getProfileById(id as number))
  }, [])

  const state = useAppSelector((state) => state.auth.user)
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
            icon={search}
          />

          <div className={styles.group}>
            <AddClient />

            <div className={styles.profile}>
              <ProfileButton
                className={styles.item}
                icon={profile?.image as string}
                name={`${profile?.first_name} ${profile?.last_name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainPageHeader
