import React, { FC, useState, useEffect } from "react"
import { Form, Formik, useFormikContext } from "formik"
import { successSchema } from "../../Schema/Validation"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import IconButton from "../../../../components/iconButton/IconButton"
import Input from "../../../../components/Input/MyInput"
import InputSearch from "../../../../components/InputMainPage"
import MySelect from "../../../../components/Select/MySelect"
import { departments, payment } from "../../selectOptions/clientFormOptions"
import {
  ICreatePayment,
  IPayment,
  IUpdateStudent,
  IUpdateStudentData,
  IStudent,
} from "../../types"
import { createPayment, editStudentById } from "../../redux/asyncActions"
import styles from "./Success.module.scss"
import {
  useLazyGetStudentByIdQuery,
  useSearchStudentsQuery,
  useSearchGroupsQuery,
  useLazyGetGroupByIdQuery,
} from "../../redux/payment"
import { useDebounce } from "../../hooks/debounce"
import { useDispatch } from "react-redux"

interface ISuccess {}

const Success: FC<ISuccess> = ({}) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const [groupSearch, setGroupSearch] = useState("")
  const [dropdown, setDropdown] = useState(false)
  const [dropdownGoups, setDropdownGroups] = useState(false)

  const toggle = () => setDropdown(!dropdown)
  const debounced = useDebounce(search, 300)
  const groupDebounced = useDebounce(groupSearch, 300)

  // Students search hooks
  const {
    isLoading,
    isError,
    data: students,
  } = useSearchStudentsQuery(debounced, {
    skip: debounced.length < 3,
  })
  const [fetchStudent, { isLoading: areStudentLoading, data: student }] =
    useLazyGetStudentByIdQuery()

  // const {
  //   isLoading: areGroupsLoading,
  //   isError: areGroupsError,
  //   data: groups,
  // } = useSearchGroupsQuery(debounced, {
  //   skip: debounced.length < 2,
  // })
  // const [fetchGroup, { isLoading: areGroupLoading, data: group }] =
  //   useLazyGetGroupByIdQuery()

  interface IValues {
    full_name: string
    group: string
    course: {
      name: string
    }
    payment_type: {
      name: string
    }
    amount: string
  }

  const FormObserver: React.FC = () => {
    const { values } = useFormikContext()
    const { full_name } = values as IValues

    // console.log("group", group)

    setSearch(full_name)
    useEffect(() => {}, [debounced, students])

    // useEffect(() => {
    //   setGroupSearch(group)
    // }, [groupDebounced, groups])

    return null
  }

  // const FormObserver2: React.FC = () => {
  //   const { values } = useFormikContext()
  //   const { group } = values as IValues

  //   console.log("group", group)

  //   setGroupSearch(group)
  //   useEffect(() => {}, [groupDebounced, groups])

  //   return null
  // }

  const handleOnChange = (e: React.FormEvent) => {
    setDropdown(debounced.length > 3 && students?.length! > 0)
  }

  const handleOnClick = (id: number) => {
    fetchStudent(id)
    setDropdown(false)
  }

  // const handleOnClickGroup = (id: number) => {
  //   fetchGroup(id)
  //   setDropdownGroups(false)
  // }

  interface IState {
    full_name: string
    group: string
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
      student?.first_name && student?.last_name
        ? `${student?.first_name} ${student?.last_name}`
        : "",
    group: "",
    // group: group?.name ? (group?.name as string) : "",
    course: {
      name: student?.department.name
        ? (student?.department.name as string)
        : "",
    },
    payment_type: {
      name: student?.payment_method.name
        ? (student?.payment_method.name as string)
        : "",
    },
    amount: "",
  }

  const onSubmit = (values: IState) => {
    const { id, came_from, department, status, payment_method, group } =
      student as IStudent
    const { course, payment_type, amount } = values

    const updateStudent: IUpdateStudent = {
      came_from: {
        name: came_from?.name as string,
      },
      group,
      department: {
        name: department?.name as string,
      },
      payment_method: {
        name: payment_method?.name as string,
      },
      status: {
        name: status?.name as string,
      },
      on_request: false,
      is_archive: false,
    }
    console.log(JSON.stringify(updateStudent, null, 2))

    dispatch(editStudentById({ id, updateStudent } as IUpdateStudentData))

    const value: ICreatePayment = {
      client_card: {
        id: student?.id as number,
        group,
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
    dispatch(createPayment(value as ICreatePayment))
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
        <Form className={styles.form} onChange={handleOnChange}>
          <FormObserver />
          {/* <FormObserver2 /> */}
          <div className={styles.content}>
            <div className={styles.inputSearch}>
              <Input
                label="ФИО студента"
                name="full_name"
                id="full_name"
                type="text"
                placeholder="ФИО"
              />
              {dropdown && (
                <ul className={styles.list}>
                  {isError && (
                    <p className={styles.textError}>Что-то пошло не так...</p>
                  )}
                  {isLoading && (
                    <p className={styles.textLoading}>Загрузка...</p>
                  )}
                  {students?.map((student) => (
                    <li
                      className={styles.item}
                      key={student.id}
                      onClick={() => handleOnClick(student.id)}
                    >
                      {student.full_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.inputSearch}>
              <Input
                label="Группа*"
                name="group"
                id="group"
                type="text"
                placeholder="Группа"
              />
              {/* {dropdownGoups && (
                <ul className={styles.list}>
                  {areGroupsLoading && (
                    <p className={styles.textLoading}>Loading...</p>
                  )}
                  {groups?.map((group) => (
                    <li
                      className={styles.item}
                      key={group.id}
                      onClick={() => handleOnClickGroup(group.id)}
                    >
                      {group.name}
                    </li>
                  ))}
                </ul>
              )} */}
            </div>
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

export default Success
