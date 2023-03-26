import { IconButtonProps } from './IconButton.props'
import plusIcon from './plusIcon.svg'
import styles from './IconButton.module.scss'
import { clsx } from 'clsx'

const IconButton = ({ text, className, ...props }: IconButtonProps) => {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      <img src={plusIcon} alt="plus" />
      <span>{text}</span>
    </button>
  )
}

export default IconButton
