import { useState } from 'react'
import clsx from 'clsx'

import styles from './ToggleButton.module.scss'

const ToggleButton = ({ setCardFilter }: any) => {
  const [toggle, setToggle] = useState<boolean>(false)

  const StudentSetToggleHandler = () => {
    setToggle(!toggle)
    setCardFilter('student')
  }

  const GroupSetToggleHandler = () => {
    setToggle(!toggle)
    setCardFilter('group')
  }

  return (
    <div className={styles.toggle}>
      <button
        className={clsx(styles.btn, !toggle && styles.active)}
        onClick={StudentSetToggleHandler}
      >
        Студенты
      </button>
      <button
        className={clsx(styles.btn, toggle && styles.active)}
        onClick={GroupSetToggleHandler}
      >
        Группы
      </button>
    </div>
  )
}

export default ToggleButton
