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
import { useAppSelector } from '../../../../hooks/redux'
import { updateReasons } from '../../helpers/updateReasonsName'

ChartJS.defaults.font.family = 'Segoe UI, sans-serif'
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)

const LeavingReason = () => {
  const LeavingReason = useAppSelector((state) => state.analytics.leavingReason)

  const updatedData = updateReasons(LeavingReason)

  const data = {
    labels: updatedData && updatedData.map(({ reason }) => reason),
    datasets: [
      {
        label: 'Количество студентов',
        data:
          updatedData && updatedData.map(({ percent_value }) => percent_value),
        backgroundColor: updatedData && updatedData.map(({ color }) => color),
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

  return (
    <div className={styles.leavingReason}>
      <h2 className={styles.title}>Почему уходят клиенты</h2>
      <div className={styles.wrapper}>
        <div className={styles.canvasWrapper}>
          <Bar data={data} options={options} className={styles.bar} />
        </div>
        <div className={styles.descr}>
          {updatedData &&
            updatedData
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
