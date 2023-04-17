import { useEffect } from 'react'
import ProfileIcon from '../../modules/students/components/profileIcon/ProfileIcon'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getProfileById } from '../../modules/profilePage/redux/asyncActions'
import PopularSource from '../../modules/analytics/Charts/PopularSource/PopularSource'

import styles from './Analytics.module.scss'
import PopularDepartment from '../../modules/analytics/Charts/PopularDepartment/PopularDepartment'
import LeavingReason from '../../modules/analytics/Charts/LeavingReason/LeavingReason'

interface Props {}

const AnalyticsPage = (props: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const auth = useAppSelector((state) => state.auth)
  const profile = useAppSelector((state) => state.profile)
  const authUserId = auth.user?.id
  const first_name = profile.profile?.first_name
  const last_name = profile.profile?.last_name
  const avatar = profile.profile?.image!

  useEffect(() => {
    if (authUserId !== undefined) {
      dispatch(getProfileById(authUserId))
    }
  }, [])

  return (
    <div className={styles.analyticsPage}>
      <div className={styles.header}>
        <ProfileIcon
          avatar={avatar}
          text={`${first_name} ${last_name} `}
          onClick={() => navigate('/profile')}
          className={styles.porfileIcon}
        />
      </div>
      <div className={styles.content}>
        {/* <div className={styles.firstRow}>
          <h1>COLUMN 1</h1>
          <h1>COLUMN 2</h1>
          <h1>COLUMN 3</h1>
          <h1>COLUMN 4</h1>
        </div> */}

        <div className={styles.secondRow}>
          <div className={styles.popularSourceWrapper}>
            <PopularSource />
          </div>

          <div className={styles.popularDepartmentWrapper}>
            <PopularDepartment />
          </div>
        </div>

        <div className={styles.thirdRow}>
          <div className={styles.leavingReasonWrapper}>
            <LeavingReason />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage
