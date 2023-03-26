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
import { fetchCreateStudent } from "../../AddClient/redux/addClientActions"

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
    dispatch(fetchAllStudents())
  }, [dispatch])

  const client: IStudentState = useAppSelector((state) => state?.client)

  // Filtering and display logic
  useEffect(() => {
    if (client.student) {
      const newInitialState: IData = {
        ...state,
        students: [...client.student],
        columns: {
          ...state.columns,
          "column-1": {
            ...state.columns["column-1"],
            studentIds: [
              ...client.student
                .filter(
                  (item) =>
                    item.status?.name.toLowerCase() ===
                      state.columns["column-1"].title.toLowerCase() &&
                    item.on_request === true
                )
                .map((item) => item.id),
            ],
          },
          "column-2": {
            ...state.columns["column-2"],
            studentIds: [
              ...client.student
                .filter(
                  (item) =>
                    item.status?.name.toLowerCase() ===
                      state.columns["column-2"].title.toLowerCase() &&
                    item.on_request === true
                )
                .map((item) => item.id),
            ],
          },
          "column-3": {
            ...state.columns["column-3"],
            studentIds: [
              ...client.student
                .filter(
                  (item) =>
                    item.status?.name.toLowerCase() ===
                      state.columns["column-3"].title.toLowerCase() &&
                    item.on_request === true
                )
                .map((item) => item.id),
            ],
          },
          "column-4": {
            ...state.columns["column-4"],
            studentIds: [
              ...client.student
                .filter(
                  (item) =>
                    item.status?.name.toLowerCase() ===
                      state.columns["column-4"].title.toLowerCase() &&
                    item.on_request === true
                )
                .map((item) => item.id),
            ],
          },
        },
      }
      setState(newInitialState)
    }
  }, [client, dispatch])

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    console.log("Source", source)
    console.log("Destination", destination)

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const sourceCol: IColumn = state.columns[source.droppableId]
    const destinationCol: IColumn = state.columns[destination.droppableId]
    destinationCol.studentIds

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

    const removedStudent = state.students?.find((item) => {
      if (item.id === removed) {
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
        } = item
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
        console.log("update", updateStudentStatus)

        dispatch(fetchUpdateStudent({ id, updateStudentStatus }))
        dispatch(fetchAllStudents())
      }
    })

    const newState: IData = {
      ...state,
      // students: updatedStudents,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    }

    console.log(state.students?.find((item) => item.id === removed))
    // const removedStudent = state.students?.find((item) => item.id === removed)
    // removedStudent?.status?.name = ''

    setState(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        {state.students ? (
          <div className={styles.container}>
            <>
              {state?.columnOrder.map((columnId) => {
                const column: IColumn = state?.columns[columnId]
                const students: IStudent[] | undefined = column.studentIds.map(
                  (studentId: number) =>
                    state.students?.find((item) => item.id === studentId)
                )

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
        ) : (
          <div className={styles.alternativeContainer}>
            <h1 className={styles.title}>Заявок пока нет</h1>
          </div>
        )}
      </div>
    </DragDropContext>
  )
}
