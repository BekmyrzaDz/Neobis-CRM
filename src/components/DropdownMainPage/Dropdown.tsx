import clsx from "clsx"
import { useField } from "formik"
import { FC, useId, useState } from "react"
import { IDepartmentOptions, IDropdown } from "."
import { arrowDown } from "../../modules/AddClient/assets"
import styles from "./Dropdown.module.scss"

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

const Dropdown: FC<IDropdown> = ({ label, options, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={styles.dropdown}>
      <label className={styles.dropdownLabel}>
        {label}
        <span>*</span>
      </label>
      <select
        {...field}
        {...props}
        className={styles.dropdownBtn}
        // onClick={() => setIsActive(!isActive)}
      >
        {/* <>
          {props.selected.name}
          <img className={styles.arrowDown} src={arrowDown} />
        </> */}
      </select>
      {/* {isActive && (
        <div className={styles.dropdownContent}>
          {options?.map((item, index) => (
            <div
              className={departmentsClasses(item)}
              onClick={() => {
                props.setSelected(item)
                console.log(item)

                setIsActive(false)
              }}
              key={`${keyId}-${index}`}
            >
              {item?.name}
            </div>
          ))}
        </div>
      )} */}
      {meta.touched && meta.error ? (
        <small className={styles.error}>{meta.error}</small>
      ) : null}
    </div>
  )
}

export default Dropdown
