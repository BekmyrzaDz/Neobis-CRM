import { useField } from "formik"
import { FC, useId, useState } from "react"
import { IDropdown } from "."
import { arrowDown } from "../../modules/AddClient/assets"
import styles from "./IconDropdown.module.scss"

const IconDropdown: FC<IDropdown> = ({
  label,
  options,
  // selected,
  // setSelected,
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const keyId = useId()
  const [field, meta] = useField(props)

  return (
    <div className={styles.dropdown}>
      <label className={styles.dropdownLabel}>
        {label}
        <span>*</span>
      </label>
      <select
        className={styles.dropdownBtn}
        // onClick={() => setIsActive(!isActive)}
        {...field}
        {...props}
      >
        {/* <div className={styles.select}> */}
        {/* <div className={styles.icon}>
            <img className={styles.img} src={selected?.icon} />
          </div>
          {selected?.name}
        </div>
        <img className={styles.arrowDown} src={arrowDown} /> */}
      </select>
      {meta.touched && meta.error ? (
        <small className={styles.error}>{meta.error}</small>
      ) : null}
      {/* {isActive && (
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
      )} */}
    </div>
  )
}

export default IconDropdown
