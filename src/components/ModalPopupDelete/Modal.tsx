import { FC } from "react"
import clsx from "clsx"
import { IModal } from "../../modules/AddClient/types"
import crossIcon from "./cross.svg"
import styles from "./Modal.module.scss"

const Modal: FC<IModal> = ({ active, setActive, children }) => {
  const modalClasses = clsx(styles.modal, {
    [`${styles.modal} ${styles.active}`]: active,
  })
  const modalContentClasses = clsx(styles.modalContent, {
    [`${styles.modalContent} ${styles.active}`]: active,
  })
  return (
    <div className={modalClasses} onClick={() => setActive(false)}>
      <div className={modalContentClasses} onClick={(e) => e.stopPropagation()}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
