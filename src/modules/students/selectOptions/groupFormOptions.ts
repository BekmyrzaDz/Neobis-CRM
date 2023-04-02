import { Option } from '../../../components/Select/MySelect.props'

// Options for departments select
const departments: Option[] = [
  { key: 'Выберите департамент', value: '' },
  { key: 'UX/UI', value: 'ux/ui' },
  { key: 'Front-end', value: 'front-end' },
  { key: 'Back-end', value: 'back-end' },
]

// Options for teachers select
const teachers: Option[] = [
  { key: 'Выберите преподователя', value: '' },
  { key: 'Кушбак Мамытов', value: 'Kushbak Mamytov' },
  { key: 'Руслан Сабитов', value: 'Ruslan Sabitov' },
]

// Options for room select
const rooms: Option[] = [
  { key: 'Выберите аудиторию', value: '' },
  { key: 'Малая комната', value: 'small_room' },
  { key: 'Средняя комната', value: 'middle_room' },
  { key: 'Большая комната', value: 'large_room' },
]

// Options for groupStatus select
const groupStatus: Option[] = [
  { key: 'Выберите статус', value: '' },
  { key: 'Активен', value: 'active' },
  { key: 'Неактивен', value: 'inactive' },
  { key: 'Приостановлен', value: 'suspended' },
]

// Options for schedules select
const schedules: Option[] = [
  { key: 'Выберите расписание', value: '' },
  { key: 'Пн/Ср/Пт', value: '1' },
  { key: 'Вт/Чт/Сб', value: '2' },
]

export { departments, teachers, rooms, groupStatus, schedules }
