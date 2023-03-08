import { IModalProps } from './Modal.props'
import styles from './Modal.module.scss'

const Modal: React.FC<IModalProps> = ({ active, setActive, children }) => {
  return (
    <div
      className={
        active ? `${styles.modal} ${styles.active}` : `${styles.modal}`
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${styles.content} ${styles.active}` : `${styles.content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
