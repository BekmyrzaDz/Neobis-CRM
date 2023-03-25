import { FC } from 'react'
import styles from './filterButton.module.scss'
import { IFilterButton } from './filterButton.props'

const FilterButton: FC<IFilterButton> = ({ text, count }) => {
  return (
    <button className={styles.btn}>
      <span className={styles.text}>{text}</span>
      <span className={styles.count}>{count}</span>
    </button>
  )
}

export default FilterButton
