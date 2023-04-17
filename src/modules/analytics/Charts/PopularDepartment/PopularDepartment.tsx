import { Pie, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'

import { updateDepartmentDataNames } from '../../helpers/updateDepartmentDataNames'
import DepartmentItem from '../../components/DepartmentItem/DepartmentItem'
import { IPopularDepartment } from '../../types'

import styles from './PopularDepartment.module.scss'

ChartJS.defaults.font.family = 'Segoe UI, sans-serif'
ChartJS.defaults.color = '#252525'
ChartJS.register(Tooltip, Legend, ArcElement)

const myData: IPopularDepartment[] = [
  {
    name: 'ux-ui',
    quantity: 22,
    color: '#C656A0',
  },
  {
    name: 'front-end',
    quantity: 15,
    color: '#32B483',
  },
  {
    name: 'pm',
    quantity: 7,
    color: '#70BF44',
  },
  {
    name: 'back-end',
    quantity: 34,
    color: '#756FB3',
  },
  {
    name: 'ios',
    quantity: 21,
    color: '#A6CE39',
  },
  {
    name: 'android',
    quantity: 11,
    color: '#A2238E',
  },
  {
    name: 'flutter',
    quantity: 17,
    color: '#00A64E',
  },
  {
    name: 'olimped_programming',
    quantity: 1,
    color: '#7C51A1',
  },
]

updateDepartmentDataNames(myData)

const data = {
  labels: myData.map((item) => item.name),
  datasets: [
    {
      label: 'Количество студентов',
      data: myData.map(({ quantity }) => quantity),
      backgroundColor: myData.map(({ color }) => color),
    },
  ],
}

const options: any = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'bottom',
      display: false,
    },
  },
  animation: {
    duration: 2200,
    easing: 'easeOutCirc',
  },
}

const PopularDepartment = () => {
  return (
    <div className={styles.popularDepartment}>
      <h2 className={styles.title}>Популярные направления</h2>
      <div className={styles.wrapper}>
        <div className={styles.canvasWrapper}>
          <Doughnut data={data} options={options} className={styles.doughnut} />
        </div>

        <div className={styles.descr}>
          {myData
            .sort((a, b) => b.quantity - a.quantity)
            .map((item) => (
              <DepartmentItem
                departmentName={item.name}
                color={item.color}
                count={item.quantity}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PopularDepartment
