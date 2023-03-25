import { clsx } from 'clsx'
import { ProfileIconProps } from './ProfileIcon.props'

import styles from './ProfileIcon.module.scss'

const ProfileIcon = ({ avatar, text, className, ...props }: ProfileIconProps) => {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <span>{text}</span>
    </button>
  )
}

export default ProfileIcon
