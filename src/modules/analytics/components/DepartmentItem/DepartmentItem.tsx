import React, { FC } from 'react'

import styles from './DepartmentItem.module.scss'

interface IDepartmentItem {
  departmentName: string
  count?: number | string
  color: string
}

const DepartmentItem: FC<IDepartmentItem> = (Props) => {
  const { departmentName, count, color } = Props
  return (
    <div className={styles.departmentItem}>
      <div className={styles.left}>
        <div className={styles.dot} style={{ backgroundColor: color }}></div>
        <span className={styles.name}>{departmentName}</span>
      </div>

      <div className={styles.count}>{count}</div>
    </div>
  )
}

export default DepartmentItem
