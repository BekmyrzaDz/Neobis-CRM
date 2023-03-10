import { useId, useState, FC } from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { clientData } from "../client-bd/client-data"
import Button from "../components/Button"
import Card from "../components/Card/Card"
import { IClient } from "../types"
import styles from "./index.module.scss"

export const DragAndDrop: FC = () => {
  const [waitingForACall, setWaitingForACall] = useState<IClient[]>(
    clientData.filter((el) => el.status === "Ждёт звонка")
  )
  const [callCompleted, setCallCompleted] = useState<IClient[]>(
    clientData.filter((el) => el.status === "Звонок совершён")
  )
  const [signedUpTrialLesson, setSignedUpTrialLesson] = useState<IClient[]>(
    clientData.filter((el) => el.status === "Записан на пробный урок")
  )
  const [attendedATrialLesson, setAttendedATrialLesson] = useState<IClient[]>(
    clientData.filter((el) => el.status === "Посетил пробный урок")
  )
  // console.log(clientDB)

  const cardId = useId()

  const onDragEnd = (result: DropResult) => {
    console.log(result)

    const { source, destination, draggableId } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    let add,
      active1 = waitingForACall,
      active2 = callCompleted,
      active3 = signedUpTrialLesson,
      active4 = attendedATrialLesson

    if (source.droppableId === "Ждёт звонка") {
      add = active1[source.index]
      active1.splice(source.index, 1)
    }
    if (source.droppableId === "Звонок совершён") {
      add = active2[source.index]
      active2.splice(source.index, 1)
    }
    if (source.droppableId === "Записан на пробный урок") {
      add = active3[source.index]
      active3.splice(source.index, 1)
    }
    if (source.droppableId === "Посетил пробный урок") {
      add = active4[source.index]
      active4.splice(source.index, 1)
    }

    if (destination.droppableId === "Ждёт звонка") {
      active1.splice(destination.index, 0, add)
    }
    if (destination.droppableId === "Звонок совершён") {
      active2.splice(destination.index, 0, add)
    }
    if (destination.droppableId === "Записан на пробный урок") {
      active3.splice(destination.index, 0, add)
    }
    if (destination.droppableId === "Посетил пробный урок") {
      active4.splice(destination.index, 0, add)
    }

    setWaitingForACall(active1)
    setCallCompleted(active2)
    setSignedUpTrialLesson(active3)
    setAttendedATrialLesson(active4)

    // let add,
    //   active = clientDB.filter((item) => {
    //     if (item.id === draggableId) {
    //       item.status = destination.droppableId
    //     }
    //   })
    // add = [...active, ...clientDB]
    // setClientDB(add)
    // console.log(active)
    // add = active[0].status = destination.droppableId
    // console.log(add)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        <div className={styles.container}>
          <Droppable droppableId="Ждёт звонка">
            {(provided) => (
              <div
                className={styles.waitingForACall}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Button name="Ждёт звонка" count={waitingForACall.length} />
                {waitingForACall.map((item, index) => (
                  <Card
                    key={`${cardId}-${index}`}
                    index={index}
                    time={item.time}
                    id={item.id}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    phone={item.phone}
                    department={item.department}
                    came_from={item.came_from}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="Звонок совершён">
            {(provided) => (
              <div
                className={styles.callCompleted}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Button name="Звонок совершён" count={callCompleted.length} />
                {callCompleted.map((item, index) => (
                  <Card
                    key={`${cardId}-${index}`}
                    index={index}
                    time={item.time}
                    id={item.id}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    phone={item.phone}
                    department={item.department}
                    came_from={item.came_from}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="Записан на пробный урок">
            {(provided) => (
              <div
                className={styles.SignedUpForAtrialLesson}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Button
                  name="Записан на пробный урок"
                  count={signedUpTrialLesson.length}
                />
                {signedUpTrialLesson.map((item, index) => (
                  <Card
                    key={`${cardId}-${index}`}
                    index={index}
                    time={item.time}
                    id={item.id}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    phone={item.phone}
                    department={item.department}
                    came_from={item.came_from}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="Посетил пробный урок">
            {(provided) => (
              <div
                className={styles.AttendedATrialLesson}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Button
                  name="Посетил пробный урок"
                  count={attendedATrialLesson.length}
                />
                {attendedATrialLesson.map((item, index) => (
                  <Card
                    key={`${cardId}-${index}`}
                    index={index}
                    time={item.time}
                    id={item.id}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    phone={item.phone}
                    department={item.department}
                    came_from={item.came_from}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}
