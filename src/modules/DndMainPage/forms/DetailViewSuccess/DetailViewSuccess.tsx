import React, { FC } from "react"
import styles from "./DetailViewSuccess.module.scss"
import { Form, Formik } from "formik"
import { successSchema } from "../../Schema/Validation"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import IconButton from "../../../../components/iconButton/IconButton"
import Input from "../../../../components/Input/MyInput"
import MySelect from "../../../../components/Select/MySelect"
import { departments, payment } from "../../selectOptions/clientFormOptions"
import {
  ICreatePayment,
  IPayment,
  IUpdateStudent,
  IUpdateStudentData,
} from "../../types"
import { createPayment, editStudentById } from "../../redux/asyncActions"

interface ISuccess {}

const DetailViewSuccess: FC<ISuccess> = ({}) => {
  const dispatch = useAppDispatch()
  const client = useAppSelector((state) => state?.client?.newStudent)
  const id = useAppSelector((state) => state?.client?.newStudent?.id)

  interface IState {
    full_name: string
    course: {
      name: string
    }
    payment_type: {
      name: string
    }
    amount: string
  }

  const initialState: IState = {
    full_name:
      client?.first_name && client?.last_name
        ? `${client?.first_name} ${client?.last_name}`
        : "",
    course: {
      name: client?.department.name ? (client?.department.name as string) : "",
    },
    payment_type: {
      name: client?.payment_method.name
        ? (client?.payment_method.name as string)
        : "",
    },
    amount: "",
  }

  const onSubmit = (values: IState) => {
    const updateStudent: IUpdateStudent = {
      came_from: {
        name: client?.came_from?.name as string,
      },
      department: {
        name: client?.department?.name as string,
      },
      payment_method: {
        name: client?.payment_method?.name as string,
      },
      status: {
        name: client?.status?.name as string,
      },
      on_request: false,
      is_archive: false,
    }
    console.log(JSON.stringify(updateStudent, null, 2))

    dispatch(editStudentById({ id, updateStudent } as IUpdateStudentData))

    const { course, payment_type, amount } = values
    const value: ICreatePayment = {
      client_card: {
        id: id as number,
      },
      course: {
        name: course.name,
      },
      payment_type: {
        name: payment_type.name,
      },
      amount: amount,
    }

    console.log(JSON.stringify(value, null, 2))
    dispatch(createPayment(value))
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Произведение оплаты</h3>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={successSchema}
        enableReinitialize={true}
      >
        <Form className={styles.form}>
          <div className={styles.content}>
            <Input
              label="ФИО студента*"
              name="full_name"
              id="full_name"
              type="text"
              placeholder="ФИО"
            />
            <MySelect
              label="Курс*"
              id="course"
              name="course.name"
              options={departments}
            />
            <MySelect
              label="Способ оплаты*"
              id="payment_type"
              name="payment_type.name"
              options={payment}
            />
            <Input
              label="Сумма*"
              name="amount"
              id="amount"
              type="text"
              placeholder="Сумма"
            />
          </div>
          <IconButton
            type="submit"
            text="Оплатить"
            className={styles.verifyBtn}
          />
        </Form>
      </Formik>
    </div>
  )
}

export default DetailViewSuccess
