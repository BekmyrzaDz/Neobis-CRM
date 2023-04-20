interface Reason {
  key: string
  value: number
}

// Options for payment select
const reasons: Reason[] = [
  { key: 'Отсутствие интереса', value: 1 },
  { key: "Финансовые проблемы", value: 2 },
  { key: "Ограничения по времени", value: 3 },
  { key: "Уровень сложности", value: 4 },
  { key: "Отсутствие восприятия ценности", value: 5 },
  { key: "Проблемы доверия", value: 6 },
  { key: "Наличие бесплатных ресурсов", value: 7 },
  { key: "Языковой барьер", value: 8 },
]

export { reasons }