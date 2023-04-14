import { Option } from '../../../components/Select/MySelect.props'

// Options for departments select
const departments: Option[] = [
  { key: 'Выберите департамент', value: '' },
  { key: 'UX/UI', value: 'ux-ui' },
  { key: 'Front-end', value: 'front-end' },
  { key: 'PM', value: 'pm' },
  { key: 'Back-end', value: 'back-end' },
  { key: 'Android', value: 'android' },
  { key: 'iOS', value: 'ios' },
  { key: 'Flutter', value: 'flutter' },
  { key: 'Олимп. программирование', value: 'olimped_programming' },
]

// Options for mentors select
const mentors: Option[] = [
  { key: 'Выберите преподователя', value: '' },
  { key: 'Khamza Avazbekov', value: 5 },
  { key: 'Nursultan Estebesov', value: 8 },
  { key: 'Bermet Mitalipova', value: 12 },
]

// Options for room select
const classrooms: Option[] = [
  { key: 'Выберите аудиторию', value: '' },
  { key: 'Малая комната', value: 'Малая комната' },
  { key: 'Большая комната', value: 'Большая комната' },
]

// Options for schedules select
const schedule_types: Option[] = [
  { key: 'Выберите расписание', value: '' },
  { key: 'Пн / Ср / Пт', value: 1 },
  { key: 'Вт / Чт / Сб', value: 2 },
]

export { departments, mentors, classrooms, schedule_types }
