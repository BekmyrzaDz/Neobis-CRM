export function formatDate(dateStr: string) {
  const dateArr = dateStr.split('-')
  const year = dateArr[0]
  const month = dateArr[1]
  const day = dateArr[2]
  const newDateStr = `${day}/${month}/${year}`
  return newDateStr
}
