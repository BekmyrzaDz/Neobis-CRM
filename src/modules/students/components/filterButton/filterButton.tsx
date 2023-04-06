import { FC } from 'react'
import { IFilterButton } from './filterButton.props'
import clsx from 'clsx'

import styles from './filterButton.module.scss'

const FilterButton: FC<IFilterButton> = ({
  className,
  text,
  count,
  onClick,
}) => {
  return (
    <button className={clsx(styles.btn, className)} onClick={onClick}>
      <span className={clsx(styles.text, className)}>{text}</span>
      {typeof count === 'number' ? (
        <span className={styles.count}>{count}</span>
      ) : (
        <img className={styles.departIcon} src={count} alt='logo' />
      )}
    </button>
  )
}

export default FilterButton
