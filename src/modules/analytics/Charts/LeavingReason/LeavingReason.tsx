import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js'

import styles from './LeavingReason.module.scss'
import DepartmentItem from '../../components/DepartmentItem/DepartmentItem'
import { ILeavingReason } from '../../types'

ChartJS.defaults.font.family = 'Segoe UI, sans-serif'
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)

const myData: ILeavingReason[] = [
  {
    reason: 'Отсутствие интереса',
    percent_value: 12,
    color: '#C656A0',
  },
  {
    reason: 'Финансовые проблемы',
    percent_value: 15,
    color: '#32B483',
  },
  {
    reason: 'Ограничения по времени',
    percent_value: 10,
    color: '#70BF44',
  },
  {
    reason: 'Уровень сложности',
    percent_value: 8,
    color: '#756FB3',
  },
  {
    reason: 'Отсутствие восприятия ценности',
    percent_value: 21,
    color: '#A6CE39',
  },
  {
    reason: 'Проблемы доверия',
    percent_value: 5,
    color: '#A2238E',
  },
  {
    reason: 'Языковой барьер',
    percent_value: 65, //14
    color: '#00A64E',
  },
  {
    reason: 'Наличие бесплатных ресурсов',
    percent_value: 87, //15
    color: '#7C51A1',
  },
]

const data = {
  labels: myData.map(({ reason }) => reason),
  datasets: [
    {
      label: 'Количество студентов',
      data: myData.map(({ percent_value }) => percent_value),
      backgroundColor: myData.map(({ color }) => color),
      borderWidth: 1,
      hoverBorderColor: '#7FFFD4', //aquamarine
      borderRadius: 6,
    },
  ],
}

const options: any = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: () => null,
        label: (item: any) =>
          ' ' + item.label + ' - ' + item.formattedValue + '%',
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        color: '#AAAAAA',
        callback: function (value: any) {
          return value + '%'
        },
      },
      beginAtZero: true,
    },
    x: {
      display: false,
    },
  },
  animation: {
    duration: 2200,
    easing: 'easeInOutExpo',
  },
}

const LeavingReason = () => {
  return (
    <div className={styles.leavingReason}>
      <h2 className={styles.title}>Почему уходят клиенты</h2>
      <div className={styles.wrapper}>
        <div className={styles.canvasWrapper}>
          <Bar data={data} options={options} className={styles.bar} />
        </div>
        <div className={styles.descr}>
          {myData
            .sort((a, b) => b.percent_value - a.percent_value)
            .map((item) => (
              <DepartmentItem
                key={item.reason}
                departmentName={item.reason}
                color={item.color}
                count={`${item.percent_value}%`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default LeavingReason
