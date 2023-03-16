import clsx from "clsx"
import { FC } from "react"
import { Draggable } from "react-beautiful-dnd"
import ClockTimeSvgComponent from "../Svg/ClockTimeSvgComponent"
import instagram from "../../assets/image/instagram.svg"
import { IClient } from "../../types"
import styles from "./Card.module.scss"

const Card: FC<IClient> = ({
  time,
  id,
  first_name,
  last_name,
  phone,
  department,
  came_from,
  index,
}) => {
  const directionClasses = clsx(styles.directionUxUi, {
    [styles.directionFront]: department.name === "Front-End",
    [styles.directionBack]: department.name === "Back-End",
    [styles.directionPM]: department.name === "PM",
    [styles.directionAndroid]: department.name === "Android",
    [styles.directionIOS]: department.name === "IOS",
    [styles.directionFlutter]: department.name === "Flutter",
    [styles.directionOlimp]: department.name === "Олимпиадное программирование",
  })
  const cardClasses = clsx(styles.card, {
    [styles.cardRed]: time === "24 ч.",
  })

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className={cardClasses}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={styles.cardInner}>
            <div className={styles.cardTop}>
              <div className={styles.clock}>
                <ClockTimeSvgComponent />
                <div className={styles.time}>{time}</div>
              </div>
              <div className={styles.id}>
                <span>{id}</span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.contentMiddle}>
                <p className={styles.name}>
                  {first_name} {last_name}
                </p>
                <p className={styles.number}>{phone}</p>
                <div className={directionClasses}>
                  <span>{department.name}</span>
                </div>
              </div>
              <div className={styles.contentBottom}>
                <div className={styles.way}>
                  <div className={styles.icon}>
                    {came_from === "Через Инстаграм" ? (
                      <img src={instagram} alt="instagram icon" />
                    ) : (
                      ""
                    )}
                  </div>
                  <span>{came_from}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card
