import { useState, FC, useEffect } from "react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import Column from "../components/Column/Column"
import { initialData } from "../client-db/client-data"
import {
  IColumn,
  IData,
  IStudent,
  IStudentState,
  IUpdateStudent,
} from "../types"
import styles from "./index.module.scss"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { fetchAllStudents, fetchUpdateStudent } from "../redux/asyncActions"
import Modal from "../../../components/ModalPopupMainPage/Modal"
import { Form, Formik } from "formik"
import MySelect from "../../../components/Select/MySelect"
import Input from "../../../components/Input/MyInput"
import MyTextarea from "../../../components/Textarea/MyTextarea"
import { clientSchema } from "../Schema/Validation"
import {
  departments,
  laptop,
  payment,
  source,
} from "../selectOptions/clientFormOptions"
import IconButton from "../../../components/iconButton/IconButton"
import { busketIcon, clockTime, deleteIcon } from "../assets"

// Reorder column list
export const reorderColumnList = (
  sourceCol: IColumn,
  startIndex: number,
  endIndex: number
) => {
  const newStudentIds: number[] = Array.from(sourceCol.studentIds)
  const [removed]: number[] = newStudentIds.splice(startIndex, 1)
  newStudentIds.splice(endIndex, 0, removed)

  const newColumn: IColumn = {
    ...sourceCol,
    studentIds: newStudentIds,
  }

  return newColumn
}

export const DragAndDrop: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllStudents())
  }, [dispatch])

  const client: IStudentState = useAppSelector((state) => state?.client)

  const [state, setState] = useState<IData>(initialData)

  // Filtering all students by status
  const filterStudentsByStatus = (students: IStudent[], column: string) => {
    const response = students.filter(
      (student) =>
        student.status?.name.toLowerCase() ===
          state.columns[column].title.toLowerCase() &&
        student.on_request === true
    )

    return response
  }

  enum Columns {
    WaitingForAcall = "column-1",
    CallCompleted = "column-2",
    SignedUpForAtrialLesson = "column-3",
    AttendedATrialLesson = "column-4",
  }

  // Filtering and display logic
  useEffect(() => {
    if (!client || !client.student) {
      return
    }

    const newInitialState: IData = {
      ...state,
      students: client.student,
      columns: {
        ...state.columns,
        "column-1": {
          ...state.columns[Columns.WaitingForAcall],
          studentIds: [
            ...(filterStudentsByStatus(
              client.student,
              Columns.WaitingForAcall
            ).map((student) => student.id) as number[]),
          ],
        },
        "column-2": {
          ...state.columns[Columns.CallCompleted],
          studentIds: [
            ...(filterStudentsByStatus(
              client.student,
              Columns.CallCompleted
            ).map((student) => student.id) as number[]),
          ],
        },
        "column-3": {
          ...state.columns[Columns.SignedUpForAtrialLesson],
          studentIds: [
            ...(filterStudentsByStatus(
              client.student,
              Columns.SignedUpForAtrialLesson
            ).map((student) => student.id) as number[]),
          ],
        },
        "column-4": {
          ...state.columns[Columns.AttendedATrialLesson],
          studentIds: [
            ...(filterStudentsByStatus(
              client.student,
              Columns.AttendedATrialLesson
            ).map((student) => student.id) as number[]),
          ],
        },
      },
    }

    setState(newInitialState)
  }, [client.student])

  // Card dragging logic
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const sourceCol: IColumn = state.columns[source.droppableId]
    const destinationCol: IColumn = state.columns[destination.droppableId]

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      )

      const newState: IData = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      }
      setState(newState)
      return
    }

    const startStudentIds: number[] = Array.from(sourceCol.studentIds)
    const [removed]: number[] = startStudentIds.splice(source.index, 1)
    const newStartCol: IColumn = {
      ...sourceCol,
      studentIds: startStudentIds,
    }

    const endStudentIds: number[] = Array.from(destinationCol.studentIds)
    endStudentIds.splice(destination.index, 0, removed)

    const newEndCol: IColumn = {
      ...destinationCol,
      studentIds: endStudentIds,
    }

    // Update student status
    state.students?.find((student) => {
      if (student.id === removed) {
        const { id, department, came_from, payment_method } = student

        const updateStudent: IUpdateStudent = {
          department: {
            name: department?.name,
          },
          came_from: {
            name: came_from?.name,
          },
          payment_method: {
            name: payment_method?.name,
          },
          status: {
            name: state.columns[destination.droppableId].title,
          },
        }

        dispatch(fetchUpdateStudent({ id, updateStudent }))
      }
    })

    const newState: IData = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    }

    setState(newState)
  }

  const initialValues: IUpdateStudent = {
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

    const changeValue: IUpdateStudent = {
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
      phone,
      laptop: laptop === "yes" ? true : false,
      paid: false,
      on_request: true,
      is_archive: false,
    }

    console.log(JSON.stringify(changeValue, null, 2))

    // dispatch(fetchUpdateStudent(id, changeValue))
  }

  const [open, setOpen] = useState<boolean>(false)

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        <div className={styles.container}>
          <>
            {state?.columnOrder.map((columnId) => {
              const column: IColumn = state?.columns[columnId]
              const students: IStudent[] | undefined = column.studentIds.map(
                (studentId: number) =>
                  state.students?.find((item) => item.id === studentId)
              ) as IStudent[]

              return (
                <Column
                  key={column.id}
                  column={column}
                  students={students || []}
                  setOpen={setOpen}
                />
              )
            })}
            {open && (
              <Modal active={open} setActive={setOpen}>
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
                          <img
                            className={styles.timeIcon}
                            src={clockTime}
                            alt="time"
                          />
                          <p className={styles.time}>20 ч.</p>
                        </div>
                        <div className={styles.idWrap}>
                          <p className={styles.id}>ID654789</p>
                        </div>
                      </div>
                      <IconButton
                        text={"Архивировать"}
                        icon={busketIcon}
                        className={styles.archiveBtn}
                        type={"button"}
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
                      <IconButton
                        text={"Сохранить изменения"}
                        type={"submit"}
                      />
                      <IconButton
                        text={"Удалить заявку"}
                        icon={deleteIcon}
                        className={styles.deleteBtn}
                        type={"button"}
                      />
                    </div>
                  </Form>
                </Formik>
              </Modal>
            )}
          </>
        </div>
      </div>
    </DragDropContext>
  )
}
