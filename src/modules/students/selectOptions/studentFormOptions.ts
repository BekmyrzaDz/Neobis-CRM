import { Option } from '../../../components/Select/MySelect.props'

// Options for departments select
const departments: Option[] = [
  { key: 'Выберите департамент', value: '' },
  { key: 'UX/UI', value: 'ux/ui' },
  { key: 'Front-end', value: 'front-end' },
  { key: 'Back-end', value: 'back-end' },
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

// Options for status select
const status: Option[] = [
  { key: 'Выбрать статус', value: '' },
  { key: 'Обучается', value: 'studying' },
  { key: 'Закончил', value: 'graduate' },
  { key: 'Прервал', value: 'break' },
]

// Options for paymant status select
const paymantStatus: Option[] = [
  { key: 'Оплачено', value: 'payd' },
  { key: 'Должен оплатить', value: 'must_pay' },
  { key: 'Скоро оплата', value: 'soon_pay' },
]

export { departments, source, laptop, status, paymantStatus }
