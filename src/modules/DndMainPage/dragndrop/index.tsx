import { useId, useState, FC } from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { clientData } from "../client-bd/client-data"
import Button from "../components/Button"
import Card from "../components/Card/Card"
import { IClient } from "../types"
import styles from "./index.module.scss"

export const DragAndDrop: FC = () => {
  const [clientDB, setClientDB] = useState<IClient[]>(clientData)
  // console.log(clientDB)

  const cardId = useId()

  const onDragEnd = (result: DropResult) => {
    console.log(result)

    const { source, destination, draggableId } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return

    let add,
      active = clientDB.filter((item) => {
        if (item.id === draggableId) {
          item.status = destination.droppableId
        }
      })
    add = [...active, ...clientDB]
    setClientDB(add)
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
                <Button name="Ждёт звонка" count={clientDB.length} />
                {clientDB
                  .filter((el) => el.status === "Ждёт звонка")
                  .map((item, index) => (
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
                <Button name="Звонок совершён" count={clientDB.length} />
                {clientDB
                  .filter((el) => el.status === "Звонок совершён")
                  .map((item, index) => (
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
                  count={clientDB.length}
                />
                {clientDB
                  .filter((el) => el.status === "Записан на пробный урок")
                  .map((item, index) => (
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
                <Button name="Посетил пробный урок" count={clientDB.length} />
                {clientDB
                  .filter((el) => el.status === "Посетил пробный урок")
                  .map((item, index) => (
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
