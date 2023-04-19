import { IPopularSource } from '../types'

export const updateSourceDataNames = (
  data: IPopularSource[]
): IPopularSource[] => {
  const updatedData: IPopularSource[] = []
  for (let i = 0; i < data.length; i++) {
    const sourceData = data[i]
    let updatedSourceData: IPopularSource
    switch (sourceData.name) {
      case 'from_instagram':
        updatedSourceData = {
          ...sourceData,
          name: 'Instagram',
        }
        break
      case 'from_announcement':
        updatedSourceData = {
          ...sourceData,
          name: 'Объявление',
        }
        break
      case 'from_website':
        updatedSourceData = {
          ...sourceData,
          name: 'Сайт',
        }
        break
      case 'other':
        updatedSourceData = {
          ...sourceData,
          name: 'Другое',
        }
        break
      default:
        updatedSourceData = sourceData
        break
    }
    updatedData.push(updatedSourceData)
  }
  return updatedData
}
