import { FC, useId, useState } from "react"
import { IDropdown } from "."
import { arrowDown } from "../../assets"
import styles from "./PaymentDropdown.module.scss"

const PaymentDropdown: FC<IDropdown> = ({
  label,
  options,
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const keyId = useId()

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
        <div className={styles.select}>
          <div className={styles.icon}>
            <img className={styles.img} src={selected?.icon} />
          </div>
          {selected?.name}
        </div>
        <img className={styles.arrowDown} src={arrowDown} />
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {options.map((option, index) => (
            <div
              className={styles.dropdownItem}
              onClick={() => {
                setSelected(option)
                setIsActive(false)
              }}
              key={`${keyId}-${index}`}
            >
              <div className={styles.icon}>
                <img className={styles.img} src={option.icon} />
              </div>
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PaymentDropdown
