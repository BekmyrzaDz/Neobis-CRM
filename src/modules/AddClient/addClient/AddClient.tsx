import { FC, useState } from "react"
import Button from "../../../components/AddButton"
import Modal from "../../../components/ModalPopupMainPage/Modal"
import PlusSvgComponent from "../components/Svg/PlusSvgComponent"
import Dropdown from "../../../components/DropdownMainPage/Dropdown"
// import Input from "../../../components/InputMainPage"
import Input from "../../../components/Input/MyInput"
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
import MySelect from "../../../components/Select/MySelect"
import {
  departments,
  laptop,
  payment,
  source,
} from "../selectOptions/clientFormOptions"
import MyTextarea from "../../../components/Textarea/MyTextarea"

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

  const onSubmit = (value: ICreateStudent) => {
    // const {
    //   first_name,
    //   last_name,
    //   surname,
    //   notes,
    //   phone,
    //   laptop,
    //   department,
    //   payment_method,
    //   came_from,
    //   paid,
    //   on_request,
    //   is_archive,
    // } = value

    // const studentData: ICreateStudent = {
    //   first_name,
    //   last_name,
    //   surname,
    //   notes,
    //   phone,
    //   laptop: laptopSelected === "Да" ? true : false,
    //   department,
    //   came_from,
    //   payment_method,
    //   paid: false,
    //   on_request: true,
    //   is_archive: false,
    // }

    // const studentDataClear: ICreateStudent = {
    //   first_name: "",
    //   last_name: "",
    //   surname: "",
    //   notes: "",
    //   phone: "",
    //   laptop: laptopSelected === "Да" ? true : false,
    //   department,
    //   came_from,
    //   payment_method,
    //   paid: false,
    //   on_request: true,
    //   is_archive: false,
    // }

    const changeValue = {
      ...value,
      laptop: value.laptop === "yes" ? true : false,
      paid: false,
      on_request: true,
      is_archive: false,
    }

    dispatch(fetchCreateStudent(changeValue))
    // setModalActive(false)
  }

  const initialValues: ICreateStudent = {
    first_name: "",
    last_name: "",
    surname: "",
    notes: "",
    phone: "",
    laptop: "",
    department: {
      name: "",
    },
    came_from: {
      name: "",
    },
    payment_method: {
      name: "",
    },
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
          initialValues={initialValues}
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
                <MySelect
                  label="Департамент*"
                  id="department"
                  name="department.name"
                  options={departments}
                />
              </div>
              <div className={styles.fullName}>
                <div className={styles.columnOne}>
                  <Input
                    label="Имя*"
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="Имя"
                    className={styles.firstName}
                  />
                  <Input
                    label="Отчество*"
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Отчество"
                  />
                </div>
                <div className={styles.columnTwo}>
                  <Input
                    label="Фамилия*"
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="Фамилия"
                  />
                </div>
              </div>
              <div className={styles.phoneAndLaptop}>
                <Input
                  label="Номер телефона*"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="+996"
                />
                <div className={styles.laptop}>
                  <MySelect
                    label="Наличие ноутбука*"
                    id="laptop"
                    name="laptop"
                    options={laptop}
                  />
                </div>
              </div>
              <div className={styles.paymentMethodAndSource}>
                <MySelect
                  label="Способ оплаты*"
                  id="payment_method"
                  name="payment_method.name"
                  options={payment}
                />
                <MySelect
                  label="Источник*"
                  id="came_from"
                  name="came_from.name"
                  options={source}
                />
              </div>
              <div className={styles.notes}>
                <MyTextarea label="Заметки" id="notes" name="notes" />
              </div>
            </div>
            <ModalButton type="submit" name="Создать заявку" />
          </Form>
        </Formik>
      </Modal>
    </>
  )
}
