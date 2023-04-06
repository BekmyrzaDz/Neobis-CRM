import { FC } from 'react'
import { IFilterButton } from './filterButton.props'

import styles from './filterButton.module.scss'

const FilterButton: FC<IFilterButton> = ({
  text,
  count,
  isActive,
  onClick,
  extraClassForText,
}) => {
  return (
    <button
      className={`${styles.btn} ${isActive ? styles.activeBtn : ''}`}
      onClick={onClick}
    >
      <span className={`${styles.text} ${extraClassForText}`}>{text}</span>
      {typeof count === 'number' ? (
        <span className={`${styles.count}`}>{count}</span>
      ) : (
        <img src={count} alt='logo' className={styles.departIcon} />
      )}
    </button>
  )
}

export default FilterButton
