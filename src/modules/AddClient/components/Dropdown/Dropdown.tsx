import clsx from "clsx"
import { FC, useId, useState } from "react"
import { IDepartmentOptions, IDropdown } from "."
import { arrowDown } from "../../assets"
import styles from "./Dropdown.module.scss"

function Dropdown<T>(props: IDropdown<T>) {
  const [isActive, setIsActive] = useState<boolean>(false)
  const keyId = useId()

  function departmentClasses<T>(props: IDepartmentOptions) {
    const classes = clsx(styles.dropdownBtn, {
      [styles.dropdownUxUi]: props.name === "UX/UI",
      [styles.dropdownFront]: props.name === "Front-End",
      [styles.dropdownBack]: props.name === "Back-End",
      [styles.dropdownPM]: props.name === "PM",
      [styles.dropdownAndroid]: props.name === "Android",
      [styles.dropdownIOS]: props.name === "iOS",
      [styles.dropdownFlutter]: props.name === "Flutter",
      [styles.dropdownOlimp]: props.name === "Олимпиадное программирование",
    })
    return classes
  }

  function departmentsClasses<T>(props: IDepartmentOptions) {
    const classes = clsx(styles.dropdownItem, {
      [styles.dropdownUxUi]: props.name === "UX/UI",
      [styles.dropdownFront]: props.name === "Front-End",
      [styles.dropdownBack]: props.name === "Back-End",
      [styles.dropdownPM]: props.name === "PM",
      [styles.dropdownAndroid]: props.name === "Android",
      [styles.dropdownIOS]: props.name === "iOS",
      [styles.dropdownFlutter]: props.name === "Flutter",
      [styles.dropdownOlimp]: props.name === "Олимпиадное программирование",
    })
    return classes
  }

  return (
    <div className={styles.dropdown}>
      <label className={styles.dropdownLabel}>
        {props.label}
        <span>*</span>
      </label>
      <div
        className={departmentClasses(props.selected)}
        onClick={() => setIsActive(!isActive)}
      >
        <>
          {props.selected.name}
          <img className={styles.arrowDown} src={arrowDown} />
        </>
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {props.options?.map((item, index) => (
            <div
              className={departmentsClasses(item)}
              onClick={() => {
                props.setSelected(item)
                setIsActive(false)
              }}
              key={`${keyId}-${index}`}
            >
              {item?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
