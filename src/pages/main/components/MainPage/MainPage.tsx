import { useState } from "react"
import MainPageHeader from "../MainPageHeader/MainPageHeader"
import Button from "./components/Button"
import styles from "./MainPage.module.scss"
import {
  waitingForACallData,
  callCompletedData,
  signedUpTrialLessonData,
  attendedATrialLessonData,
  Aplication,
} from "./application-data/application-data"
import Card from "./components/Card/Card"

const MainPage = () => {
  const [waitingForACall, setWaitingForACall] =
    useState<Aplication[]>(waitingForACallData)
  const [callCompleted, setCallCompleted] =
    useState<Aplication[]>(callCompletedData)
  const [signedUpTrialLesson, setSignedUpTrialLesson] = useState<Aplication[]>(
    signedUpTrialLessonData
  )
  const [attendedATrialLesson, setAttendedATrialLesson] = useState<
    Aplication[]
  >(attendedATrialLessonData)

  return (
    <div className={styles.main}>
      <MainPageHeader />
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.waitingForACall}>
            <Button name="Ждёт звонка" count={12} />
            {waitingForACall.map((item) => (
              <Card
                time={item.time}
                id={item.id}
                name={item.name}
                phone={item.phone}
                direction={item.direction}
                way={item.way}
              />
            ))}
          </div>
          <div className={styles.callCompleted}>
            <Button name="Звонок совершён" count={12} />
            {callCompleted.map((item) => (
              <Card
                time={item.time}
                id={item.id}
                name={item.name}
                phone={item.phone}
                direction={item.direction}
                way={item.way}
              />
            ))}
          </div>
          <div className={styles.SignedUpForAtrialLesson}>
            <Button name="Записан на проб. урок" count={12} />
            {signedUpTrialLesson.map((item) => (
              <Card
                time={item.time}
                id={item.id}
                name={item.name}
                phone={item.phone}
                direction={item.direction}
                way={item.way}
              />
            ))}
          </div>
          <div className={styles.AttendedATrialLesson}>
            <Button name="Посетил проб. урок" count={12} />
            {attendedATrialLesson.map((item) => (
              <Card
                time={item.time}
                id={item.id}
                name={item.name}
                phone={item.phone}
                direction={item.direction}
                way={item.way}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
