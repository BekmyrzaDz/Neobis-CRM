import { IconButtonProps } from './IconButton.props'
import styles from './IconButton.module.scss'
import { clsx } from 'clsx'

const IconButton = ({ text, icon, className, onClick, ...props }: IconButtonProps) => {
  return (
    <button {...props} className={clsx(styles.button, className)} onClick={onClick}>
      {icon ? <img src={icon} alt="icon" /> : null}
      <span>{text}</span>
    </button>
  )
}

export default IconButton
