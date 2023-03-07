import { useId, useState } from "react"
import {
  waitingForACallData,
  callCompletedData,
  signedUpTrialLessonData,
  attendedATrialLessonData,
} from "../client-bd/client-data"
import { IClient } from "../types"
import Button from "../components/Button"
import Card from "../components/Card/Card"
import styles from "./index.module.scss"

export const DragAndDrop = () => {
  const [waitingForACall, setWaitingForACall] =
    useState<IClient[]>(waitingForACallData)
  const [callCompleted, setCallCompleted] =
    useState<IClient[]>(callCompletedData)
  const [signedUpTrialLesson, setSignedUpTrialLesson] = useState<IClient[]>(
    signedUpTrialLessonData
  )
  const [attendedATrialLesson, setAttendedATrialLesson] = useState<IClient[]>(
    attendedATrialLessonData
  )

  const cardId = useId()

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.waitingForACall}>
          <Button name="Ждёт звонка" count={waitingForACall.length} />
          {waitingForACall.map((item, index) => (
            <Card
              key={`${cardId}-${index}`}
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
          <Button name="Звонок совершён" count={callCompleted.length} />
          {callCompleted.map((item, index) => (
            <Card
              key={`${cardId}-${index}`}
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
          <Button
            name="Записан на проб. урок"
            count={signedUpTrialLesson.length}
          />
          {signedUpTrialLesson.map((item, index) => (
            <Card
              key={`${cardId}-${index}`}
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
          <Button
            name="Посетил проб. урок"
            count={attendedATrialLesson.length}
          />
          {attendedATrialLesson.map((item, index) => (
            <Card
              key={`${cardId}-${index}`}
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
  )
}
