import { FC, useState } from "react"
import { IDropdown } from "."
import { arrowDown } from "../../modules/AddClient/assets"
import styles from "./SimpleDropdown.module.scss"

const options: string[] = ["Да", "Нет"]

const SimpleDropdown: FC<IDropdown> = ({
  label,
  name,
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div className={styles.dropdown}>
      <label className={styles.dropdownLabel}>
        {label}
        <span>*</span>
      </label>
      <div
        className={styles.dropdownBtn}
        onClick={() => setIsActive(!isActive)}
      >
        {selected ? selected : options[0]}
        <img className={styles.arrowDown} src={arrowDown} />
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {options.map((option) => (
            <div
              className={styles.dropdownItem}
              onClick={() => {
                setSelected(option)
                setIsActive(false)
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SimpleDropdown
