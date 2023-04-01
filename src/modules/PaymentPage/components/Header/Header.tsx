import React, { useState } from "react"
import Button from "../../../../components/AddButton"
import Modal from "../../../../components/ModalPopupMainPage/Modal"
import ProfileButton from "../../../../components/ProfileButton"
import SearchInput from "../../../../components/SearchInput"
import { useAppSelector } from "../../../../hooks/redux"
import { imgAvatar, plusBox, search } from "../../assets"
import styles from "./Header.module.scss"

interface Props {}

const Header = (props: Props) => {
  const [active, setActive] = useState(false)
  const user = useAppSelector((state) => state.auth.user)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px",
      }}
    >
      <SearchInput icon={search} name="Поиск" placeholder="Поиск" />
      <div
        style={{ display: "flex", alignItems: "center" }}
        className={styles.group}
      >
        <Button
          icon={plusBox}
          name="Добавить способ оплаты"
          active={active}
          setActive={setActive}
          style={{ marginRight: "16px" }}
        />
        <Modal active={active} setActive={setActive}>
          <h1>Hello World</h1>
        </Modal>
        <ProfileButton
          icon={imgAvatar}
          name={`${user?.first_name} ${user?.last_name}`}
        />
      </div>
    </div>
  )
}

export default Header
