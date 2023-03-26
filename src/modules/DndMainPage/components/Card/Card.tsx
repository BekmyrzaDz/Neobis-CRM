import clsx from "clsx"
import { FC } from "react"
import { Draggable } from "react-beautiful-dnd"
import ClockTimeSvgComponent from "../Svg/ClockTimeSvgComponent"
import instagram from "../../assets/image/instagram.svg"
import { IDepartment, ISource, IStudent } from "../../types"
import styles from "./Card.module.scss"
import { renderImg } from "../../helpers/renderImg"

interface Props {
  student: IStudent
  isDragging: boolean
}

function Card<T>(props: Props) {
  const { student, isDragging } = props

  const directionClasses = clsx(styles.directionUxUi, {
    [styles.directionFront]: student?.department?.name === "Front-End",
    [styles.directionBack]: student?.department?.name === "Back-End",
    [styles.directionPM]: student?.department?.name === "PM",
    [styles.directionAndroid]: student?.department?.name === "Android",
    [styles.directionIOS]: student?.department?.name === "IOS",
    [styles.directionFlutter]: student?.department?.name === "Flutter",
    [styles.directionOlimp]:
      student?.department?.name === "Олимпиадное программирование",
  })

  // const cardClasses = clsx(styles.card, {
  //   [styles.cardRed]: student?.time === "24 ч.",
  // })

  const idClasses = clsx(styles.id, {
    [styles.idDrag]: isDragging,
  })

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardTop}>
          <div className={styles.clock}>
            <ClockTimeSvgComponent />
            <div className={styles.time}>{}</div>
          </div>
          <div className={idClasses}>
            <span>{student?.id}</span>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.contentMiddle}>
            <p className={styles.name}>
              {student?.first_name} {student?.last_name}
            </p>
            <p className={styles.number}>{student?.phone}</p>
            <div className={directionClasses}>
              <span>{student?.department?.name}</span>
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.way}>
              <div className={styles.icon}>
                {renderImg(student?.came_from?.name)}
              </div>
              {/* <span>{student?.came_from?.name}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
