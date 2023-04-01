import { IconButtonProps } from './IconButton.props'
import styles from './IconButton.module.scss'
import { clsx } from 'clsx'

const IconButton = ({ text, icon, className, ...props }: IconButtonProps) => {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      {icon ? <img src={icon} alt="icon" /> : null}
      <span>{text}</span>
    </button>
  )
}

export default IconButton
