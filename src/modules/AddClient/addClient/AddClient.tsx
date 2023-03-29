import { FC, useState } from "react"
import Button from "../../../components/AddButton"
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
import { ICreateStudent, IDepartmentOptions, IOptions } from "../types"
import { flagKyrgyzstan, left, plusBox } from "../assets"
import styles from "./AddClient.module.scss"
import { Form, Formik } from "formik"
import { addClientSchema } from "../Schema/Validation"
import { addClientState } from "../State/state"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { fetchCreateStudent } from "../redux/addClientActions"
import clsx from "clsx"

const initialDepartmentState = departmentOptions[0]
const initialPaymentState = paymentOptions[0]
const initialSourceState = sourceOptions[0]

export const AddClient: FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.addClient)
  console.log(state)

  const [modalActive, setModalActive] = useState<boolean>(false)
  const [departmentSelected, setDepartmentSelected] =
    useState<IDepartmentOptions>(initialDepartmentState)
  console.log(departmentSelected)

  const [laptopSelected, setLaptopSelected] = useState<string>("")
  const [paymentSelected, setPaymentSelected] =
    useState<IOptions>(initialPaymentState)
  const [sourceSelected, setSourceSelected] =
    useState<IOptions>(initialSourceState)

  function departmentsClasses<T>(props: IDepartmentOptions) {
    const classes = clsx(styles.dropdownItem, {
      [styles.dropdownUxUi]: props.name === "UX/UI",
      [styles.dropdownFront]: props.name === "Front-End",
      [styles.dropdownBack]: props.name === "Back-End",
      [styles.dropdownPM]: props.name === "PM",
      [styles.dropdownAndroid]: props.name === "Android",
      [styles.dropdownIOS]: props.name === "iOS",
      [styles.dropdownFlutter]: props.name === "Flutter",
      [styles.dropdownOlimp]: props.name === "Олимпиадное программирование",
    })
    return classes
  }

  const onSubmit = (value: ICreateStudent) => {
    const {
      first_name,
      last_name,
      surname,
      notes,
      phone,
      laptop,
      department,
      payment_method,
      came_from,
      paid,
      on_request,
      is_archive,
    } = value

    const studentData: ICreateStudent = {
      first_name,
      last_name,
      surname,
      notes,
      phone,
      laptop: laptopSelected === "Да" ? true : false,
      department,
      came_from,
      payment_method,
      paid: false,
      on_request: true,
      is_archive: false,
    }

    const studentDataClear: ICreateStudent = {
      first_name: "",
      last_name: "",
      surname: "",
      notes: "",
      phone: "",
      laptop: laptopSelected === "Да" ? true : false,
      department,
      came_from,
      payment_method,
      paid: false,
      on_request: true,
      is_archive: false,
    }

    dispatch(fetchCreateStudent(studentData))
    setModalActive(false)
  }

  return (
    <>
      <Button
        icon={plusBox}
        name="Добавить заявку"
        active={modalActive}
        setActive={setModalActive}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <Formik
          initialValues={addClientState}
          validationSchema={addClientSchema}
          enableReinitialize={true}
          onSubmit={onSubmit}
        >
          <Form className={styles.form}>
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
                  name="department.name"
                  options={departmentOptions}
                  selected={departmentSelected}
                  setSelected={setDepartmentSelected}
                >
                  <option className={styles.option} value="">
                    Выберите департамент
                  </option>
                  {departmentOptions.map((option, index) => (
                    <option
                      className={departmentsClasses(option)}
                      key={index}
                      value={option.name}
                    >
                      {option.name}
                    </option>
                  ))}
                </Dropdown>
              </div>
              <div className={styles.fullName}>
                <div className={styles.columnOne}>
                  <Input
                    name="first_name"
                    id="first_name"
                    type="text"
                    placeholder="Даниил"
                    label="Имя"
                  />
                  <Input
                    name="last_name"
                    id="last_name"
                    type="text"
                    placeholder="Сергеевич"
                    label="Отчество"
                  />
                </div>
                <div className={styles.columnTwo}>
                  <Input
                    name="surname"
                    id="surname"
                    type="text"
                    placeholder="Алёшин"
                    label="Фамилия"
                  />
                </div>
              </div>
              <div className={styles.phoneAndLaptop}>
                <PhoneInput
                  name="phone"
                  id="phone"
                  icon={<img className={styles.img} src={flagKyrgyzstan} />}
                  type="tel"
                  placeholder="+996"
                  label="Номер телефона"
                />
                <div className={styles.laptop}>
                  <SimpleDropdown
                    name="laptop"
                    label="Наличие ноутбука"
                    selected={laptopSelected}
                    setSelected={setLaptopSelected}
                  />
                </div>
              </div>
              <div className={styles.paymentMethodAndSource}>
                <IconDropdown name="payment_method.name" label="Способ оплаты">
                  <option value="">Выберите способ оплаты</option>
                  {paymentOptions.map((option, index) => (
                    <option key={index} value={option.name}>
                      <div className={styles.icon}>
                        <img className={styles.img} src={option.icon} />
                      </div>
                      {option.name}
                    </option>
                  ))}
                </IconDropdown>
                <IconDropdown name="came_from.name" label="Источник">
                  <option value="">Выберите источник</option>
                  {sourceOptions.map((option, index) => (
                    <option key={index} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </IconDropdown>
              </div>
              <div className={styles.notes}>
                <Textarea
                  name="notes"
                  id="notes"
                  label="Заметки"
                  placeholder="Родной, вообще не переживай на счет этого"
                />
              </div>
            </div>
            <ModalButton type="submit" name="Создать заявку" />
          </Form>
        </Formik>
      </Modal>
    </>
  )
}
