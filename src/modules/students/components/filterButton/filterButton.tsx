import { FC, useEffect } from 'react'
import { IFilterButton } from './filterButton.props'

import styles from './filterButton.module.scss'

const FilterButton: FC<IFilterButton> = ({
  text,
  count,
  isActive,
  onClick,
  extraClassForText,
  departmentFilter,
}) => {
  useEffect(() => {
    localStorage.setItem('activeFilter', departmentFilter)
  }, [departmentFilter])
  return (
    <button
      className={`${styles.btn} ${isActive ? styles.activeBtn : ''}`}
      onClick={onClick}
    >
      <span className={`${styles.text} ${extraClassForText}`}>{text}</span>
      <span className={`${styles.count}`}>{count}</span>
    </button>
  )
}

export default FilterButton
