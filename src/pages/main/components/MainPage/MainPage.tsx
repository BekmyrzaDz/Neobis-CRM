import { FC } from "react"
import MainPageHeader from "../MainPageHeader/MainPageHeader"
import { DragAndDrop } from "../../../../modules/DndMainPage"
import styles from "./MainPage.module.scss"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import Spinner from "../../../../components/spinner/spinner"
import { reset } from "../../../../modules/DndMainPage/redux/dndSlice"

const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const client = useAppSelector((state) => state?.addClient)

  if (client.isSuccess) {
    dispatch(reset())
  }

  if (client.isLoading) {
    return <Spinner />
  }

  return (
    <div className={styles.main}>
      <MainPageHeader />
      <DragAndDrop />
    </div>
  )
}

export default MainPage
