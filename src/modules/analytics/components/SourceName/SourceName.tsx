import { FC } from 'react'

import styles from './SourceName.module.scss'

interface SourceNameProps {
  color: string
  name: string
  value: string
}

const SourceName: FC<SourceNameProps> = ({ color, name, value }) => {
  return (
    <div className={styles.item}>
      <div className={styles.dot} style={{ backgroundColor: color }}></div>
      <div className={styles.text}>{name}</div>
      <small>{value}</small>
    </div>
  )
}

export default SourceName
