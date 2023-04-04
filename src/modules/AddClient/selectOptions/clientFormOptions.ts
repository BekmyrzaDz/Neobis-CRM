import { Option } from "../../../components/Select/MySelect.props";

// Options for departments select
const departments: Option[] = [
  { key: 'Выберите департамент', value: '' },
  { key: 'UX/UI', value: 'ux/ui' },
  { key: 'Front-end', value: 'front-end' },
  { key: 'Back-end', value: 'back-end' },
  { key: 'Project managment', value: 'pm' },
  { key: 'Android', value: 'android' },
  { key: 'IOS', value: 'ios' },
  { key: 'Flutter', value: 'flutter' },
  { key: 'Olimped programming', value: 'olimped_programming' },
]

// Options for payment select
const payment: Option[] = [
  { key: 'Выберите способ', value: '' },
  { key: "Наличные", value: 'cash' },
  { key: "Электронный кошелек", value: 'online_wallet' },
  { key: "Карта", value: 'card' },
]

// Options for source select
const source: Option[] = [
  { key: 'Выберите источник', value: '' },
  { key: 'Через инстаграм', value: 'from_instagram' },
  { key: 'Через сайт ', value: 'from_website' },
  { key: 'Другое', value: 'other' },
]

// Options for laptop select
const laptop: Option[] = [
  { key: 'Выбрать', value: '' },
  { key: 'Да', value: 'yes' },
  { key: 'Нет', value: 'no' },
]

export { departments, payment,  source, laptop }