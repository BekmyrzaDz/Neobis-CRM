import historyIcon from '../../assets/icons/history.svg'

import styles from './HistoryButton.module.scss'

const HistoryButton = ({ ...props }) => {
  return (
    <button {...props} className={styles.button}>
      <img src={historyIcon} alt="history" />
    </button>
  )
}

export default HistoryButton
