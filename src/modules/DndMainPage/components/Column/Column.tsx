import React, { useState } from "react"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { IColumn, IStudent } from "../../types"
import Button from "../Button"
import Card from "../Card/Card"
import styles from "./Column.module.scss"

interface Props {
  column: IColumn
  students: IStudent[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setOpenFailure: React.Dispatch<React.SetStateAction<boolean>>
  setOpenSuccessful: React.Dispatch<React.SetStateAction<boolean>>
}

function Column<T>(props: Props) {
  const { column, students, setOpen, setOpenFailure, setOpenSuccessful } = props

  return (
    <div className={styles.column}>
      <Button name={column?.title} count={students?.length} />
      <Droppable droppableId={column?.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className={styles.container}
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {students &&
              students.map((student, index) => (
                <Draggable
                  key={student?.id}
                  draggableId={`${student?.id}`}
                  index={index}
                >
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Card
                        student={student}
                        isDragging={draggableSnapshot.isDragging}
                        setOpen={setOpen}
                        setOpenFailure={setOpenFailure}
                        setOpenSuccessful={setOpenSuccessful}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column
