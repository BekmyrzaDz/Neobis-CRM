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
import { ICreateStudent, IDepartmentOptions, IOptions } from "../types"
import { flagKyrgyzstan, left } from "../assets"
import styles from "./AddClient.module.scss"
import { Form, Formik } from "formik"
import { addClientSchema } from "../Schema/Validation"
import { addClientState } from "../State/state"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { fetchCreateStudent } from "../redux/addClientActions"

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
    console.log("value", value)

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

    console.log("data", studentData)

    dispatch(fetchCreateStudent(studentData))
  }

  return (
    <>
      <Button
        icon={<PlusSvgComponent />}
        name="Добавить заявку"
        active={modalActive}
        setActive={setModalActive}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <Formik
          initialValues={addClientState}
          validationSchema={addClientSchema}
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
                  <option value="">Plese select</option>
                  {departmentOptions.map((option) => (
                    <option value={option.name}>{option.name}</option>
                  ))}
                  {/* <option value="Front-End">Front-End</option>
                  <option value="Back-End">Back-End</option>
                  <option value="PM">PM</option>
                  <option value="Android">Android</option>
                  <option value="iOS">iOS</option>
                  <option value="Flutter">Flutter</option>
                  <option value="Olymp programming">Olymp programming</option> */}
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
                  placeholder="+996 551552770"
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
                <IconDropdown
                  name="payment_method.name"
                  label="Способ оплаты"
                  // options={paymentOptions}
                  // selected={paymentSelected}
                  // setSelected={setPaymentSelected}
                >
                  <option value="">Plese select</option>
                  {paymentOptions.map((option) => (
                    <option value={option.name}>{option.name}</option>
                  ))}
                </IconDropdown>
                <IconDropdown
                  name="came_from.name"
                  label="Источник"
                  // options={sourceOptions}
                  // selected={sourceSelected}
                  // setSelected={setSourceSelected}
                >
                  <option value="">Plese select</option>
                  {sourceOptions.map((option) => (
                    <option value={option.name}>{option.name}</option>
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
