import { Pie, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import { updateDepartmentDataNames } from '../../helpers/updateDepartmentDataNames'
import DepartmentItem from '../../components/DepartmentItem/DepartmentItem'
import { useAppSelector } from '../../../../hooks/redux'

import styles from './PopularDepartment.module.scss'

ChartJS.defaults.font.family = 'Segoe UI, sans-serif'
ChartJS.defaults.color = '#252525'
ChartJS.register(Tooltip, Legend, ArcElement)

const PopularDepartment = () => {
  const PopularDepartment = useAppSelector(
    (state) => state.analytics.popularDepartment
  )

  const updatedData = updateDepartmentDataNames(PopularDepartment)

  const data = {
    labels: updatedData && updatedData.map(({ name }) => name),
    datasets: [
      {
        label: 'Количество студентов',
        data: updatedData && updatedData.map(({ quantity }) => quantity),
        backgroundColor: updatedData && updatedData.map(({ color }) => color),
        hoverOffset: 4,
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
      easing: 'easeOutCirc',
    },
  }
  return (
    <div className={styles.popularDepartment}>
      <h2 className={styles.title}>Популярные направления</h2>
      <div className={styles.wrapper}>
        <div className={styles.canvasWrapper}>
          <Pie data={data} options={options} className={styles.doughnut} />
        </div>

        <div className={styles.descr}>
          {updatedData &&
            updatedData
              .sort((a, b) => b.quantity - a.quantity)
              .map((item) => (
                <DepartmentItem
                  key={item.name}
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
