import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'

import { IRequestStatus } from '../../../types'
import { updateReqStatusDepartmentNames } from '../../../helpers/updateReqStatusDepartmentNames'
import DepartmentItem from '../../../components/DepartmentItem/DepartmentItem'

import styles from './CallWaiting.module.scss'

ChartJS.defaults.font.family = 'Segoe UI, sans-serif'
ChartJS.defaults.color = '#252525'
ChartJS.register(Tooltip, Legend, ArcElement)

const myData: IRequestStatus = {
  name: 'Ждёт звонка',
  departments: [
    {
      name: 'back-end',
      num_students: 34,
      color: '#756FB3',
    },
    {
      name: 'android',
      num_students: 11,
      color: '#A2238E',
    },
    {
      name: 'front-end',
      num_students: 15,
      color: '#32B483',
    },
    {
      name: 'flutter',
      num_students: 17,
      color: '#00A64E',
    },
    {
      name: 'pm',
      num_students: 7,
      color: '#70BF44',
    },
    {
      name: 'ux-ui',
      num_students: 22,
      color: '#C656A0',
    },
    {
      name: 'ios',
      num_students: 21,
      color: '#A6CE39',
    },
    {
      name: 'olimped_programming',
      num_students: 1,
      color: '#C656A0',
    },
  ],
}

const updatedData = updateReqStatusDepartmentNames(myData)

const data = {
  labels: updatedData.departments.map((department) => department.name),
  datasets: [
    {
      label: 'Количество',
      data: updatedData.departments.map(
        (department) => department.num_students
      ),
      backgroundColor: updatedData.departments.map(
        (department) => department.color
      ),
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

const CallWaiting = () => {
  return (
    <div className={styles.callWaiting}>
      <h2 className={styles.title}>Ждет звонка</h2>
      <div className={styles.wrapper}>
        <div className={styles.canvasWrapper}>
          <Doughnut data={data} options={options} className={styles.doughnut} />
        </div>

        <div className={styles.descr}>
          {updatedData.departments
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

export default CallWaiting
