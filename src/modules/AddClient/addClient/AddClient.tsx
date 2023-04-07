import { FC, useState } from "react"
import Button from "../../../components/AddButton"
import Modal from "../../../components/ModalPopupMainPage/Modal"
import Input from "../../../components/Input/MyInput"
import ModalButton from "../components/ModalButton"
import { ICreateStudent, IDepartmentOptions, IOptions } from "../types"
import { flagKyrgyzstan, left, plusBox } from "../assets"
import styles from "./AddClient.module.scss"
import { Form, Formik } from "formik"
import { addClientSchema } from "../Schema/Validation"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { fetchCreateStudent } from "../redux/addClientActions"
import MySelect from "../../../components/Select/MySelect"
import {
  departments,
  laptop,
  payment,
  source,
} from "../selectOptions/clientFormOptions"
import MyTextarea from "../../../components/Textarea/MyTextarea"

export const AddClient: FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.addClient)

  const [modalActive, setModalActive] = useState<boolean>(false)

  const onSubmit = (value: ICreateStudent) => {
    const changeValue = {
      ...value,
      laptop: value.laptop === "yes" ? true : false,
      paid: false,
      on_request: true,
      is_archive: false,
    }

    dispatch(fetchCreateStudent(changeValue))
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
              {/* <img
                className={styles.left}
                src={left}
                alt="icon left"
                onClick={() => setModalActive(false)}
              /> */}
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
