import React, { FC } from "react"
import styles from "./DetailViewFailure.module.scss"
import { Form, Formik } from "formik"
import { reasonSchema } from "../../Schema/Validation"
import IconButton from "../../../../components/iconButton/IconButton"
import MyCheckbox from "../../components/Checkbox"
import { reasons } from "../../checkboxReasons/checkboxFormReasons"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { IUpdateStudent, IUpdateStudentData } from "../../types"
import {
  deleteStudentByIdForAnalytics,
  editStudentById,
} from "../../redux/asyncActions"

interface Failure {
  setOpenFailure: React.Dispatch<React.SetStateAction<boolean>>
}

interface IState {
  checked: number[]
}

const initialState: IState = {
  checked: [],
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.checked) {
    console.log("✅ Checkbox is checked")
  } else {
    console.log("⛔️ Checkbox is NOT checked")
  }
}

const DetailViewFailure: FC<Failure> = ({ setOpenFailure }) => {
  const dispatch = useAppDispatch()
  const student = useAppSelector((state) => state?.client?.newStudent)
  const id = useAppSelector((state) => state?.client?.newStudent?.id)

  const onSubmit = (value: IState) => {
    console.log(JSON.stringify(value, null, 2))
    const { checked } = value

    const checkedNumber: number[] = checked.map((item) => {
      if (typeof item === "string") {
        return parseFloat(item)
      }
    }) as number[]

    const updateStudent: IUpdateStudent = {
      ...student,
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
      reason: [...checkedNumber],
      on_request: true,
      is_archive: false,
    }

    console.log(JSON.stringify(updateStudent, null, 2))

    dispatch(editStudentById({ id, updateStudent } as IUpdateStudentData))
    dispatch(deleteStudentByIdForAnalytics(id as number))
  }

  const handleClick = () => {
    setOpenFailure(false)
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Причина провальной сделки</h3>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={reasonSchema}
        enableReinitialize={true}
      >
        <Form className={styles.reasons}>
          <MyCheckbox
            reasons={reasons}
            className={styles.checkboxses}
            name="checked"
            id="checked"
          />
          <div className={styles.btns}>
            <IconButton
              type="submit"
              text="Подтвердить"
              className={styles.verifyBtn}
            />
            <IconButton
              type="submit"
              text="Отмена"
              className={styles.cancelBtn}
              onClick={handleClick}
            />
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default DetailViewFailure
