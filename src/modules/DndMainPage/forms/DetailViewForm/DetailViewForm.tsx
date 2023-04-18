import React, { FC } from "react"
import { Form, Formik } from "formik"
import { IUpdateStudent, IUpdateStudentData } from "../../types"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { detailEditStudentById } from "../../redux/asyncActions"
import { clientSchema } from "../../Schema/Validation"
import IconButton from "../../../../components/iconButton/IconButton"
import MySelect from "../../../../components/Select/MySelect"
import Input from "../../../../components/Input/MyInput"
import MyTextarea from "../../../../components/Textarea/MyTextarea"
import styles from "./DetailViewForm.module.scss"
import { busketIcon, clockTime, deleteIcon } from "../../assets"
import {
  departments,
  laptop,
  payment,
  source,
} from "../../selectOptions/clientFormOptions"

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>
}

const DetailViewForm: FC<Props> = ({ setOpen, setOpenDelete }) => {
  const dispatch = useAppDispatch()
  const student = useAppSelector((state) => state?.client?.newStudent)
  const id = useAppSelector((state) => state?.client?.newStudent?.id)

  const initialValues: IUpdateStudent = {
    first_name: student?.first_name ? student?.first_name : "",
    last_name: student?.last_name ? student?.last_name : "",
    notes: student?.notes ? student?.notes : "",
    phone: student?.phone ? student?.phone : "",
    laptop: student?.laptop === true ? "yes" : "no",
    department: {
      name: student?.department?.name as string,
    },
    came_from: {
      name: student?.came_from?.name as string,
    },
    payment_method: {
      name: student?.payment_method?.name as string,
    },
  }

  const onSubmit = (value: IUpdateStudent) => {
    const {
      first_name,
      last_name,
      came_from,
      laptop,
      department,
      payment_method,
      phone,
    } = value

    const updateStudent: IUpdateStudent = {
      ...value,
      first_name,
      last_name,
      came_from: {
        name: came_from?.name as string,
      },
      department: {
        name: department?.name as string,
      },
      payment_method: {
        name: payment_method?.name as string,
      },
      status: {
        name: student?.status?.name as string,
      },
      phone,
      laptop: laptop === "yes" ? true : false,
      on_request: true,
      is_archive: false,
    }

    dispatch(detailEditStudentById({ id, updateStudent } as IUpdateStudentData))
  }

  const handleArchive = () => {
    const updateStudent: IUpdateStudent = {
      came_from: {
        name: student?.came_from?.name as string,
      },
      department: {
        name: student?.department?.name as string,
      },
      payment_method: {
        name: student?.payment_method?.name as string,
      },
      status: {
        name: student?.status?.name as string,
      },
      on_request: true,
      is_archive: true,
    }

    console.log(JSON.stringify(updateStudent, null, 2))

    dispatch(detailEditStudentById({ id, updateStudent } as IUpdateStudentData))
  }

  const handleClick = () => {
    setOpen(false)
    setTimeout(() => {
      setOpenDelete(true)
    }, 200)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={clientSchema}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.top}>
          <div className={styles.topWrap}>
            <p className={styles.title}>Карточка клиента</p>
            <div className={styles.timeWrapper}>
              <img className={styles.timeIcon} src={clockTime} alt="time" />
              <p className={styles.time}>20 ч.</p>
            </div>
            <div className={styles.idWrap}>
              <p className={styles.id}>{student?.id}</p>
            </div>
          </div>
          <IconButton
            text={"Архивировать"}
            icon={busketIcon}
            className={styles.archiveBtn}
            type={"button"}
            onClick={handleArchive}
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
                value={student?.first_name}
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
        <div className={styles.btns}>
          <IconButton text={"Сохранить изменения"} type={"submit"} />
          <IconButton
            text={"Удалить заявку"}
            icon={deleteIcon}
            className={styles.deleteBtn}
            type={"button"}
            onClick={handleClick}
          />
        </div>
      </Form>
    </Formik>
  )
}

export default DetailViewForm
