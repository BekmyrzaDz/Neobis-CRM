import { useId, useState, FC, useEffect } from "react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import Column from "../components/Column/Column"
import { initialData } from "../client-bd/client-data"
import {
  IColumn,
  IData,
  IStudent,
  IStudentState,
  IUpdateStudent,
  IUpdateStudentData,
} from "../types"
import styles from "./index.module.scss"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { fetchAllStudents, fetchUpdateStudent } from "../redux/asyncActions"

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

  const filterStudentsByStatus = (student: IStudent[], column: string) => {
    const response = student
      .filter(
        (item) =>
          item.status?.name.toLowerCase() ===
            state.columns[column].title.toLowerCase() &&
          item.on_request === true
      )
      .map((item) => item.id) as number[]

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
            ...filterStudentsByStatus(client.student, Columns.WaitingForAcall),
          ],
        },
        "column-2": {
          ...state.columns[Columns.CallCompleted],
          studentIds: [
            ...filterStudentsByStatus(client.student, Columns.CallCompleted),
          ],
        },
        "column-3": {
          ...state.columns[Columns.SignedUpForAtrialLesson],
          studentIds: [
            ...filterStudentsByStatus(
              client.student,
              Columns.SignedUpForAtrialLesson
            ),
          ],
        },
        "column-4": {
          ...state.columns[Columns.AttendedATrialLesson],
          studentIds: [
            ...filterStudentsByStatus(
              client.student,
              Columns.AttendedATrialLesson
            ),
          ],
        },
      },
    }

    setState(newInitialState)
  }, [client.student])

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

    state.students?.find((student) => {
      if (student.id === removed) {
        const {
          id,
          first_name,
          last_name,
          surname,
          notes,
          phone,
          laptop,
          department,
          came_from,
          payment_method,
          status,
          paid,
          on_request,
        } = student

        const updateStudentStatus: IUpdateStudent = {
          first_name,
          last_name,
          surname,
          notes,
          phone,
          laptop,
          department: {
            name: department.name,
          },
          came_from: {
            name: came_from.name,
          },
          payment_method: {
            name: payment_method?.name,
          },
          paid,
          on_request,
          status: {
            name: state.columns[destination.droppableId].title,
          },
        }

        dispatch(fetchUpdateStudent({ id, updateStudentStatus }))
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
                />
              )
            })}
          </>
        </div>
      </div>
    </DragDropContext>
  )
}
