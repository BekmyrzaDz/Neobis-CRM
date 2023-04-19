import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileIcon from '../../modules/students/components/profileIcon/ProfileIcon'
import Spinner from '../../components/spinner/spinner'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getProfileById } from '../../modules/profilePage/redux/asyncActions'
import {
  getPopularDepartment,
  getPopularSource,
  getRequestStatuses,
} from '../../modules/analytics/redux/asyncActions'

import {
  CallMade,
  CallWaiting,
  LeavingReason,
  PopularDepartment,
  PopularSource,
  TrialLessonMade,
  TrialLessonSigned,
} from '../../modules/analytics/Charts'

import styles from './Analytics.module.scss'

interface Props {}

const AnalyticsPage = (props: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const auth = useAppSelector((state) => state.auth)
  const profile = useAppSelector((state) => state.profile)
  const authUserId = auth.user?.id
  const token = auth.user?.access
  const first_name = profile.profile?.first_name
  const last_name = profile.profile?.last_name
  const avatar = profile.profile?.image!
  const isLoading = useAppSelector((state) => state.analytics.isLoading)

  useEffect(() => {
    if (authUserId !== undefined) {
      dispatch(getProfileById(authUserId))
    }
    if (token !== undefined) {
      dispatch(getRequestStatuses(token))
      dispatch(getPopularSource(token))
      dispatch(getPopularDepartment(token))
    }
  }, [])

  if (isLoading) {
    return <Spinner />
  }

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
        <div className={styles.firstRow}>
          <div className={styles.callWaitingWrapper}>
            <CallWaiting />
          </div>
          <div className={styles.callWaitingWrapper}>
            <CallMade />
          </div>
          <div className={styles.callWaitingWrapper}>
            <TrialLessonSigned />
          </div>
          <div className={styles.callWaitingWrapper}>
            <TrialLessonMade />
          </div>
        </div>

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
