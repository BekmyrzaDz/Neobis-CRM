import { useState, FC, useEffect } from "react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
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
import ModalSimple from "../../../components/ModalPopup/Modal"
import ModalDelete from "../components/ModalPopup/Modal"
import IconButton from "../../../components/iconButton/IconButton"
import DetailViewForm from "../forms/DetailViewForm/DetailViewForm"
import DetailViewFailure from "../forms/DetailViewFailure/DetailViewFailure"
import {
  deleteStudentById,
  getAllStudents,
  editStudentById,
} from "../redux/asyncActions"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { initialData } from "../client-db/client-data"
import styles from "./index.module.scss"
import DetailViewSuccess from "../forms/DetailViewSuccess/DetailViewSuccess"

enum Columns {
  WaitingForAcall = "column-1",
  CallCompleted = "column-2",
  SignedUpForAtrialLesson = "column-3",
  AttendedATrialLesson = "column-4",
}

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
  const [state, setState] = useState<IData>(initialData)

  useEffect(() => {
    dispatch(getAllStudents())
  }, [dispatch])

  const client: IStudentState = useAppSelector((state) => state?.client)

  // Filtering all students by status function
  const filterStudentsByStatus = (
    students: IStudent[],
    column: string
  ): IStudent[] => {
    return students.filter(
      (student) =>
        student.status?.name.toLowerCase() ===
          state.columns[column].title.toLowerCase() &&
        (student.on_request === true || student.is_archive === false)
    )
  }

  // Descending sort
  const sortBA = (arr: number[]): number[] => {
    return arr.sort((a, b) => b - a)
  }

  // Get Array with ids
  const getArrayWithIds = (students: IStudent[], column: string): number[] => {
    return filterStudentsByStatus(students, column).map(
      (student) => student.id
    ) as number[]
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
            ...sortBA(getArrayWithIds(client.student, Columns.WaitingForAcall)),
          ],
        },
        "column-2": {
          ...state.columns[Columns.CallCompleted],
          studentIds: [
            ...sortBA(getArrayWithIds(client.student, Columns.CallCompleted)),
          ],
        },
        "column-3": {
          ...state.columns[Columns.SignedUpForAtrialLesson],
          studentIds: [
            ...sortBA(
              getArrayWithIds(client.student, Columns.SignedUpForAtrialLesson)
            ),
          ],
        },
        "column-4": {
          ...state.columns[Columns.AttendedATrialLesson],
          studentIds: [
            ...sortBA(
              getArrayWithIds(client.student, Columns.AttendedATrialLesson)
            ),
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

        dispatch(editStudentById({ id, updateStudent }))
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
  const [openFailure, setOpenFailure] = useState<boolean>(false)
  const [openSuccessful, setOpenSuccessful] = useState<boolean>(false)

  const id = useAppSelector((state) => state?.client?.newStudent?.id)

  const handleDelete = () => {
    dispatch(deleteStudentById(id as number))
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
                  setOpenFailure={setOpenFailure}
                  setOpenSuccessful={setOpenSuccessful}
                />
              )
            })}
            {open && (
              <Modal active={open} setActive={setOpen}>
                <DetailViewForm
                  setOpen={setOpen}
                  setOpenDelete={setOpenDelete}
                />
              </Modal>
            )}
            {openDelete && (
              <ModalDelete active={openDelete} setActive={setOpenDelete}>
                <h3 className={styles.deleteTitle}>
                  Вы уверены что хотите удалить?
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
            {openSuccessful && (
              <Modal active={openSuccessful} setActive={setOpenSuccessful}>
                <DetailViewSuccess />
              </Modal>
            )}
            {openFailure && (
              <ModalSimple active={openFailure} setActive={setOpenFailure}>
                <DetailViewFailure setOpenFailure={setOpenFailure} />
              </ModalSimple>
            )}
          </>
        </div>
      </div>
    </DragDropContext>
  )
}
