import React, { useState } from 'react'
import styles from './dropDown.module.scss'
import arrow from '../../assets/icons/arrow.svg'
import clsx from 'clsx'
import { DropdownButtonProps, IDropdownOption } from './dropDown.props'

const DropdownButton: React.FC<DropdownButtonProps> = ({
  options,
  defaultOption,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<IDropdownOption>(
    defaultOption || options[0]
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOptionClick = (option: IDropdownOption) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className={styles.container}>
      <button
        className={clsx(styles.btn, isOpen && styles.activeBtn)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption.label}</span>
        <img
          src={arrow}
          alt='arrow'
          className={clsx(styles.arrow, isOpen && styles.activeArrow)}
        />
      </button>
      {isOpen && (
        <ul className={clsx(styles.list, isOpen && styles.activeList)}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownButton
