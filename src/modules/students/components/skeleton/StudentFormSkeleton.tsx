import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './StudentFormSkeleton.module.scss'

const StudentFormSkeleton = () => {
  return (
    <div>
      <br />
      <br />
      <Skeleton height={50} width={280} borderRadius={50} />
      <br />
      <br />
      <div className={styles.double}>
        <Skeleton height={32} width={320} borderRadius={50} />
        <br />
        <Skeleton height={32} width={320} borderRadius={50} />
      </div>
      <br />
      <div className={styles.double}>
        <Skeleton height={32} width={320} borderRadius={50} />
        <br />
        <Skeleton height={32} width={320} borderRadius={50} />
      </div>
      <br />
      <div className={styles.double}>
        <Skeleton height={32} width={320} borderRadius={50} />
        <br />
        <Skeleton height={32} width={320} borderRadius={50} />
      </div>
      <br />
      <div className={styles.double}>
        <Skeleton height={32} width={320} borderRadius={50} />
        <br />
        <Skeleton height={32} width={320} borderRadius={50} />
      </div>
      <br />
      <div className={styles.double}>
        <Skeleton height={32} width={320} borderRadius={50} />
        <br />
        <Skeleton height={32} width={320} borderRadius={50} />
      </div>
      <br />
      <br />
      <Skeleton height={140} width={680} borderRadius={15} />
      <br />
      <br />
      <Skeleton height={32} width={680} borderRadius={50} />
      <br />
      <Skeleton height={32} width={680} borderRadius={50} />
      <br />
      <Skeleton height={32} width={680} borderRadius={50} />
      <br />
      <br />
    </div>
  )
}

export default StudentFormSkeleton
