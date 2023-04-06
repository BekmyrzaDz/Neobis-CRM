import { FC } from 'react'
import { IFilterButton } from './filterButton.props'
import clsx from 'clsx'

import styles from './filterButton.module.scss'

const FilterButton: FC<IFilterButton> = ({ className, text, count, onClick}) => {
  return (
    <button className={clsx(styles.btn, className)} onClick={onClick}>
      <span className={clsx(styles.text, className)}>{text}</span>
      <span className={styles.count}>{count}</span>
    </button>
  )
}

export default FilterButton
