import clsx from "clsx"
import { FC, useState } from "react"
import ClockTimeSvgComponent from "../Svg/ClockTimeSvgComponent"
import { IStudent } from "../../types"
import styles from "./Card.module.scss"
import { renderImg } from "../../helpers/renderImg"
import { switchDepartmentName } from "../../helpers/switchDepartmentName"
import Button from "../IconButton/Button"
import { check, close } from "../../assets"
import { useAppDispatch } from "../../../../hooks/redux"
import { fetchStudentById } from "../../redux/asyncActions"

interface Props {
  student: IStudent
  isDragging: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Card<T>(props: Props) {
  const dispatch = useAppDispatch()
  const { student, isDragging, setOpen } = props
  const [color, setColor] = useState<string>("")

  const directionClasses = clsx(styles.directionUxUi, {
    [styles.directionFront]:
      student?.department?.name.toLowerCase() === "Front-End".toLowerCase(),
    [styles.directionBack]:
      student?.department?.name.toLowerCase() === "Back-End".toLowerCase(),
    [styles.directionPM]:
      student?.department?.name.toLowerCase() === "PM".toLowerCase(),
    [styles.directionAndroid]:
      student?.department?.name.toLowerCase() === "Android".toLowerCase(),
    [styles.directionIOS]:
      student?.department?.name.toLowerCase() === "IOS".toLowerCase(),
    [styles.directionFlutter]:
      student?.department?.name.toLowerCase() === "Flutter".toLowerCase(),
    [styles.directionOlimp]:
      student?.department?.name.toLowerCase() ===
      "Olimped_programming".toLowerCase(),
  })

  // const cardClasses = clsx(styles.card, {
  //   [styles.cardRed]: student?.time === "24 ч.",
  // })

  const idClasses = clsx(styles.id, {
    [styles.idDrag]: isDragging,
  })

  const handleMouseEnter = () => {
    setColor("green")
  }

  const handleMouseLeave = () => {
    setColor("")
  }

  const { id } = student

  const handleClick = () => {
    dispatch(fetchStudentById(id as number))
    setOpen(true)
  }

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardTop}>
          <div className={styles.clock}>
            <ClockTimeSvgComponent />
            <div className={styles.time}>{student?.request_date}</div>
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
              <span>{switchDepartmentName(student?.department?.name)}</span>
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.way}>
              <div className={styles.icon}>
                {renderImg(student?.came_from?.name)}
              </div>
            </div>
            <div className={styles.deal}>
              <Button
                icon={check}
                color={`violet`}
                hoverColor={color}
                isDragging={isDragging}
              />
              <Button icon={close} color={`red`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
