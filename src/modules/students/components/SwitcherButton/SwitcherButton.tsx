import styles from './SwitcherButton.module.scss'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'

interface SwitcherButtonProps {
  activeOption: string
  setActiveOption: Dispatch<SetStateAction<string>>
}

const SwitcherButton: FC<SwitcherButtonProps> = ({
  activeOption,
  setActiveOption,
}) => {
  useEffect(() => {
    localStorage.setItem('activeOption', activeOption)
  }, [activeOption])

  const handleOptionClick = (option: string) => {
    setActiveOption(option)
  }

  return (
    <div className={styles.filterButton}>
      <div className={styles.optionWrapper}>
        <button
          className={`${styles.option} ${
            activeOption === 'Студенты' ? styles.active : ''
          }`}
          onClick={() => handleOptionClick('Студенты')}
        >
          Студенты
        </button>
        <button
          className={`${styles.option} ${
            activeOption === 'Группы' ? styles.active : ''
          }`}
          onClick={() => handleOptionClick('Группы')}
        >
          Группы
        </button>
        <div
          className={`${styles.indicator} ${
            activeOption === 'Студенты' ? styles.left : styles.right
          }`}
        />
      </div>
    </div>
  )
}

export default SwitcherButton
