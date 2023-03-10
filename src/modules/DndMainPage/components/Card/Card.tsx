import clsx from "clsx"
import { FC } from "react"
import { Draggable } from "react-beautiful-dnd"
import ClockTimeSvgComponent from "../Svg/ClockTimeSvgComponent"
import instagram from "../../assets/image/instagram.svg"
import InstagramSvgComponent from "../Svg/InstagramSvgComponent"
import NoteSvgComponent from "../Svg/NoteSvgComponet"
import styles from "./Card.module.scss"
import { IClient } from "../../types"

const Card: FC<IClient> = ({
  time,
  id,
  first_name,
  last_name,
  phone,
  department,
  came_from,
  status,
  index,
}) => {
  const directionClasses = clsx(styles.directionUxUi, {
    [styles.directionFront]: department.name === "Front-End",
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
                <div className={styles.noteAndClear}>
                  <div className={styles.note}>
                    <NoteSvgComponent color="#756FB3" />
                  </div>
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
