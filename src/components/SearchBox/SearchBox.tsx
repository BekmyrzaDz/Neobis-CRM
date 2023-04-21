import React from 'react'
import searchIcon from '../../assets/icons/search.svg'
import styles from './SearchBox.module.scss'

interface Props {
  onChange: (value: string) => void
}

const SearchBox: React.FC<Props> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    onChange && onChange(value)
  }

  return (
    <div className={styles.searchBox}>
      <img src={searchIcon} alt='logo' className={styles.icon} />
      <input
        type='text'
        onChange={handleChange}
        className={styles.input}
        placeholder='Поиск'
      />
    </div>
  )
}

export default SearchBox
