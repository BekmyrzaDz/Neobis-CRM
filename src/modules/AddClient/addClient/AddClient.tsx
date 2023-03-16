import { FC, useState } from "react"
import Button from "../components/Button"
import Modal from "../../../components/ModalPopupMainPage/Modal"
import PlusSvgComponent from "../components/Svg/PlusSvgComponent"
import Dropdown from "../../../components/DropdownMainPage/Dropdown"
import Input from "../../../components/InputMainPage"
import PhoneInput from "../../../components/IconInputMainPage"
import SimpleDropdown from "../../../components/SimpleDropdownMainPage/SimpleDropdown"
import IconDropdown from "../../../components/IconDropdownMainPage/IconDropdown"
import Textarea from "../../../components/TextareaMainPage"
import ModalButton from "../components/ModalButton"
import { departmentOptions, paymentOptions, sourceOptions } from "../mockAPI"
import { IDepartmentOptions, IOptions } from "../types"
import { flagKyrgyzstan, left } from "../assets"
import styles from "./AddClient.module.scss"

const initialDepartmentState = departmentOptions[0]
const initialPaymentState = paymentOptions[0]
const initialSourceState = sourceOptions[0]

export const AddClient: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [departmentSelected, setDepartmentSelected] =
    useState<IDepartmentOptions>(initialDepartmentState)
  const [laptopSelected, setLaptopSelected] = useState<string>("")
  const [paymentSelected, setPaymentSelected] =
    useState<IOptions>(initialPaymentState)
  const [sourceSelected, setSourceSelected] =
    useState<IOptions>(initialSourceState)

  return (
    <>
      <Button
        icon={<PlusSvgComponent />}
        name="Добавить заявку"
        active={modalActive}
        setActive={setModalActive}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <form className={styles.form}>
          <div className={styles.top}>
            <p className={styles.title}>Создание заявки</p>
            <img
              className={styles.left}
              src={left}
              alt="icon left"
              onClick={() => setModalActive(false)}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.department}>
              <Dropdown
                label="Департамент"
                options={departmentOptions}
                selected={departmentSelected}
                setSelected={setDepartmentSelected}
              />
            </div>
            <div className={styles.fullName}>
              <div className={styles.columnOne}>
                <Input placeholder="Даниил" label="Имя" />
                <Input placeholder="Сергеевич" label="Отчество" />
              </div>
              <div className={styles.columnTwo}>
                <Input placeholder="Алёшин" label="Фамилия" />
              </div>
            </div>
            <div className={styles.phoneAndLaptop}>
              <PhoneInput
                icon={<img className={styles.img} src={flagKyrgyzstan} />}
                type="tel"
                placeholder="+996 551552770"
                label="Номер телефона"
              />
              <div className={styles.laptop}>
                <SimpleDropdown
                  label="Наличие ноутбука"
                  selected={laptopSelected}
                  setSelected={setLaptopSelected}
                />
              </div>
            </div>
            <div className={styles.paymentMethodAndSource}>
              <IconDropdown
                label="Способ оплаты"
                options={paymentOptions}
                selected={paymentSelected}
                setSelected={setPaymentSelected}
              />
              <IconDropdown
                label="Источник"
                options={sourceOptions}
                selected={sourceSelected}
                setSelected={setSourceSelected}
              />
            </div>
            <div className={styles.notes}>
              <Textarea
                label="Заметки"
                placeholder="Родной, вообще не переживай на счет этого"
              />
            </div>
          </div>
          <ModalButton name="Создать заявку" />
        </form>
      </Modal>
    </>
  )
}
