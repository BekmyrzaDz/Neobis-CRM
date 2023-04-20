import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import { updateReqStatusDepartmentNames } from '../../../helpers/updateReqStatusDepartmentNames'
import DepartmentItem from '../../../components/DepartmentItem/DepartmentItem'
import { useAppSelector } from '../../../../../hooks/redux'

import styles from './TrialLessonSigned.module.scss'

ChartJS.defaults.font.family = 'Segoe UI, sans-serif'
ChartJS.defaults.color = '#252525'
ChartJS.register(Tooltip, Legend, ArcElement)

const TrialLessonSigned = () => {
  const TrialLessonSignedData = useAppSelector(
    (state) => state.analytics.requestStatus[2]
  )

  const updatedData = updateReqStatusDepartmentNames(TrialLessonSignedData)

  const data = {
    labels:
      updatedData &&
      updatedData?.departments &&
      updatedData?.departments?.map((department) => department.name),
    datasets: [
      {
        label: 'Количество',
        data:
          updatedData &&
          updatedData?.departments &&
          updatedData?.departments?.map(
            (department) => department.num_students
          ),
        backgroundColor:
          updatedData &&
          updatedData?.departments &&
          updatedData?.departments?.map((department) => department.color),
      },
    ],
  }

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 2200,
      easing: 'easeInQuad',
    },
  }
  return (
    <div className={styles.trialLessonSigned}>
      <h2 className={styles.title}>{updatedData && updatedData.name}</h2>
      <div className={styles.wrapper}>
        <div className={styles.canvasWrapper}>
          <Doughnut data={data} options={options} className={styles.doughnut} />
        </div>

        <div className={styles.descr}>
          {updatedData &&
            updatedData?.departments &&
            updatedData?.departments
              .sort((a, b) => b.num_students - a.num_students)
              .map((item) => (
                <DepartmentItem
                  key={item.name}
                  departmentName={item.name}
                  color={item.color}
                  count={item.num_students}
                />
              ))}
        </div>
      </div>
    </div>
  )
}

export default TrialLessonSigned
