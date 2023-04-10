import { IModalProps } from './Modal.props'
import styles from './Modal.module.scss'
import crossIcon from './cross.svg'
import clsx from 'clsx'

const Modal: React.FC<IModalProps> = ({ className, active, setActive, children }) => {
  return (
    <div
      className={
        active ? `${styles.modal} ${styles.active}` : `${styles.modal}`
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${clsx(styles.content, className)} ${styles.active}` : `${styles.content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={crossIcon}
          alt='crossIcon'
          className={styles.cross}
          onClick={() => setActive(false)}
        />
        {children}
      </div>
    </div>
  )
}

export default Modal
