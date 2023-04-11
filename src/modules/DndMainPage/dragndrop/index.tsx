import { useState, FC, useEffect } from "react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { Form, Formik } from "formik"
import {
  IColumn,
  IData,
  IStudent,
  IStudentState,
  IUpdateStudent,
  IUpdateStudentData,
} from "../types"
import Column from "../components/Column/Column"
import Modal from "../../../components/ModalPopupMainPage/Modal"
import ModalDelete from "../../../components/ModalPopupDelete/Modal"
import MySelect from "../../../components/Select/MySelect"
import Input from "../../../components/Input/MyInput"
import MyTextarea from "../../../components/Textarea/MyTextarea"
import IconButton from "../../../components/iconButton/IconButton"
import {
  fetchAllStudents,
  fetchDeleteStudent,
  fetchDetailUpdateStudent,
  fetchStudentById,
  fetchUpdateStudent,
} from "../redux/asyncActions"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import {
  departments,
  laptop,
  payment,
  source,
} from "../selectOptions/clientFormOptions"
import { initialData } from "../client-db/client-data"
import { clientSchema } from "../Schema/Validation"
import { busketIcon, clockTime, deleteIcon } from "../assets"
import styles from "./index.module.scss"

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
        (student.on_request === true || student.is_archive === false)
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

  const [open, setOpen] = useState<boolean>(false)
  const [openDelete, setOpenDelete] = useState<boolean>(false)

  const student = useAppSelector((state) => state?.client?.newStudent)
  const id = useAppSelector((state) => state?.client?.newStudent?.id)
  console.log(student)

  const initialValues: IUpdateStudent = {
    first_name: student?.first_name ? student?.first_name : "",
    last_name: student?.last_name ? student?.last_name : "",
    surname: "",
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
      paid: false,
      on_request: true,
      is_archive: false,
    }

    // console.log(JSON.stringify(updateStudent, null, 2))

    dispatch(
      fetchDetailUpdateStudent({ id, updateStudent } as IUpdateStudentData)
    )
  }

  const handleArchive = () => {
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
      paid: false,
      on_request: true,
      is_archive: true,
    }

    dispatch(
      fetchDetailUpdateStudent({ id, updateStudent } as IUpdateStudentData)
    )
  }

  const handleClick = () => {
    setOpen(false)
    setTimeout(() => {
      setOpenDelete(true)
    }, 100)
  }

  const handleDelete = () => {
    dispatch(fetchDeleteStudent(id as number))
  }

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
                      <IconButton
                        text={"Сохранить изменения"}
                        type={"submit"}
                      />
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
              </Modal>
            )}
            {openDelete && (
              <ModalDelete active={openDelete} setActive={setOpenDelete}>
                <h3 className={styles.deleteTitle}>
                  Вы уверены что хотите удалить ?
                </h3>
                <div className={styles.btnsWrap}>
                  <IconButton
                    text={"Да"}
                    className={styles.deleteBtn}
                    onClick={handleDelete}
                  />
                  <IconButton
                    text={"Нет"}
                    onClick={() => setOpenDelete(false)}
                  />
                </div>
              </ModalDelete>
            )}
          </>
        </div>
      </div>
    </DragDropContext>
  )
}
