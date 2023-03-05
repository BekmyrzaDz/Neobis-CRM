import clsx from "clsx"
import ClearSvgComponent from "../Svg/ClearSvgComponet"
import ClockTimeSvgComponent from "../Svg/ClockTimeSvgComponent"
import NoteSvgComponent from "../Svg/NoteSvgComponet"
import styles from "./Card.module.scss"

type Props = {
  time: string
  id: string
  name: string
  phone: string
  direction: string
  way: string
}

const Card = ({ time, id, name, phone, direction, way }: Props) => {
  const directionClasses = clsx(styles.directionUxUi, {
    [styles.directionFront]: direction === "Front-End",
  })
  const cardClasses = clsx(styles.card, {
    [styles.cardRed]: time === "24 ч.",
  })

  return (
    <div className={cardClasses}>
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
            <p className={styles.name}>{name}</p>
            <p className={styles.number}>{phone}</p>
            <div className={directionClasses}>
              <span>{direction}</span>
            </div>
          </div>
          <div className={styles.contentBottom}>
            <div className={styles.way}>
              <span>{way}</span>
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
  )
}

export default Card
