import { IPopularSource } from '../types'

export const updateSourceDataNames = (data: IPopularSource[]) => {
  for (let i = 0; i < data.length; i++) {
    switch (data[i].name) {
      case 'from_instagram':
        data[i].name = 'Instagram'
        break
      case 'from_announcement':
        data[i].name = 'Объявление'
        break
      case 'from_website':
        data[i].name = 'Сайт'
        break
      case 'other':
        data[i].name = 'Другое'
        break
      default:
        break
    }
  }
}
