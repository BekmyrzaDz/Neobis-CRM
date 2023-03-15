import { FC, useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal/Modal"
import PlusSvgComponent from "../components/Svg/PlusSvgComponent"
import Dropdown from "../components/Dropdown/Dropdown"
import Input from "../components/Input"
import PhoneInput from "../components/PhoneInput"
import LaptopDropdown from "../components/LaptopDropdown/LaptopDropdown"
import PaymentDropdown from "../components/PaymentDropdown/PaymentDropdown"
import styles from "./AddClient.module.scss"
import Textarea from "../components/Textarea"
import ModalButton from "../components/ModalButton"
import { IDepartmentOptions } from "../components/Dropdown"
import {
  advertisements,
  cash,
  creditCard,
  dotsHorizontal,
  flagKyrgyzstan,
  instagram,
  left,
  wallet,
  web,
} from "../assets"
import { IOptions } from "../components/PaymentDropdown"

const departmentOptions: IDepartmentOptions[] = [
  { id: 1, name: "UX/UI" },
  { id: 2, name: "Front-End" },
  { id: 3, name: "Back-End" },
  { id: 4, name: "PM" },
  { id: 5, name: "Android" },
  { id: 6, name: "iOS" },
  { id: 7, name: "Flutter" },
  { id: 8, name: "Олимпиадное программирование" },
]

const paymentOptions: IOptions[] = [
  { icon: cash, name: "Наличными" },
  { icon: wallet, name: "Электронный кошелек" },
  { icon: creditCard, name: "Картой" },
]

const sourceOptions: IOptions[] = [
  { icon: instagram, name: "Через Instagram" },
  { icon: advertisements, name: "Через объявление" },
  { icon: web, name: "Через сайт" },
  { icon: dotsHorizontal, name: "Другое(через друга и т.п.)" },
]

const initialDepartmentState = departmentOptions[0]
const initialPaymentState = paymentOptions[0]
const initialSourceState = sourceOptions[0]

export const AddClient: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(true)
  const [selected, setSelected] = useState<IDepartmentOptions>(
    initialDepartmentState
  )
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
              alt="left"
              onClick={() => setModalActive(false)}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.department}>
              <Dropdown
                label="Департамент"
                options={departmentOptions}
                selected={selected}
                setSelected={setSelected}
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
                <LaptopDropdown
                  label="Наличие ноутбука"
                  selected={laptopSelected}
                  setSelected={setLaptopSelected}
                />
              </div>
            </div>
            <div className={styles.paymentMethodAndSource}>
              <PaymentDropdown
                label="Способ оплаты"
                options={paymentOptions}
                selected={paymentSelected}
                setSelected={setPaymentSelected}
              />
              <PaymentDropdown
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
