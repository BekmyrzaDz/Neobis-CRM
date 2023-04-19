import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js'
import { updateSourceDataNames } from '../../helpers/updateSourceDataNames'
import SourceName from '../../components/SourceName/SourceName'
import { useAppSelector } from '../../../../hooks/redux'

import styles from './PopularSource.module.scss'

ChartJS.defaults.font.family = 'Segoe UI, sans-serif'
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)

const PopularSource = () => {
  const PopularSource = useAppSelector((state) => state.analytics.popularSource)

  const updatedData = updateSourceDataNames(PopularSource)

  const data = {
    labels: updatedData && updatedData.map(({ name }) => name),
    datasets: [
      {
        label: '%',
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
      easing: 'easeInOutBounce',
    },
  }
  return (
    <div className={styles.popularSource}>
      <h2 className={styles.title}>Откуда приходят клиенты</h2>
      <div className={styles.wrapper}>
        <div className={styles.canvasWrapper}>
          <Bar data={data} options={options} className={styles.bar} />
        </div>
        <div className={styles.descr}>
          {updatedData &&
            updatedData.map((item) => (
              <SourceName
                key={item.name}
                color={item.color}
                name={item.name}
                value={`${item.percent_value}%`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PopularSource
