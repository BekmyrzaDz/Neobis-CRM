import { Option } from '../../../components/Select/MySelect.props'

// Options for departments select
const departments: Option[] = [
  { key: 'Выберите департамент', value: '' },
  { key: 'UX/UI', value: 'ux/ui' },
  { key: 'Front-end', value: 'front-end' },
  { key: 'PM', value: 'pm' },
  { key: 'Back-end', value: 'back-end' },
  { key: 'Android', value: 'android' },
  { key: 'iOS', value: 'ios' },
  { key: 'Flutter', value: 'flutter' },
  { key: 'Олимп. программирование', value: 'olimped_programming' },
]

// Options for source select
const source: Option[] = [
  { key: 'Выберите источник', value: '' },
  { key: 'Через инстаграм', value: 'from_instagram' },
  { key: 'Через сайт ', value: 'from_website' },
  { key: 'Через обьявление', value: 'from_announcement' },
  { key: 'Другое', value: 'other' },
]

// Options for laptop select
const laptop: Option[] = [
  { key: 'Выбрать', value: false },
  { key: 'Да', value: true },
  { key: 'Нет', value: false },
]

// Options for paymant status select
const paymantStatus: Option[] = [
  { key: 'Оплачено', value: 1 },
  { key: 'Должен оплатить', value: 2 },
  { key: 'Скоро оплата', value: 3 },
]

export { departments, source, laptop, paymantStatus }
