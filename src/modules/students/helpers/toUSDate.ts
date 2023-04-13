function formatUSDate(dateStr: string) {
  const dateArr = dateStr.split('/')
  const day = dateArr[0]
  const month = dateArr[1]
  const year = dateArr[2]
  const newDateStr = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  return newDateStr
}
