import React, { useState } from "react"
import Button from "../../../../components/AddButton"
import Modal from "../../../../components/ModalPopupMainPage/Modal"
import ProfileButton from "../../../../components/ProfileButton"
import SearchInput from "../../../../components/SearchInput"
import { useAppSelector } from "../../../../hooks/redux"
import { imgAvatar, plusBox, search } from "../../assets"
import styles from "./Header.module.scss"
import Success from "../SuccessForm/Success"
import { useGetProfileByIdQuery } from "../../redux/payment"

interface Props {}

const Header = (props: Props) => {
  const [active, setActive] = useState(false)
  const user = useAppSelector((state) => state?.auth?.user)

  const {
    isLoading: areProfileLoading,
    isError: areProfileError,
    data: profile,
  } = useGetProfileByIdQuery(user?.id as number)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "24px",
      }}
    >
      {/* <SearchInput icon={search} name="Поиск" placeholder="Поиск" /> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
        className={styles.group}
      >
        <Button
          icon={plusBox}
          name="Внести оплату"
          active={active}
          setActive={setActive}
          style={{ marginRight: "16px" }}
        />
        <Modal active={active} setActive={setActive}>
          <Success />
        </Modal>
        <ProfileButton
          icon={profile?.image}
          name={`${profile?.first_name} ${profile?.last_name}`}
        />
      </div>
    </div>
  )
}

export default Header
