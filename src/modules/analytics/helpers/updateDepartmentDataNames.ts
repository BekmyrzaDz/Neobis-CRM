import { IPopularDepartment } from '../types'

export const updateDepartmentDataNames = (data: IPopularDepartment[]) => {
  for (let i = 0; i < data.length; i++) {
    switch (data[i].name) {
      case 'ux-ui':
        data[i].name = 'UX/UI'
        break
      case 'front-end':
        data[i].name = 'Frontend'
        break
      case 'pm':
        data[i].name = 'PM'
        break
      case 'back-end':
        data[i].name = 'Backend'
        break
      case 'ios':
        data[i].name = 'iOS'
        break
      case 'android':
        data[i].name = 'Android'
        break
      case 'flutter':
        data[i].name = 'Flutter'
        break
      case 'olimped_programming':
        data[i].name = 'PO'
        break
      default:
        break
    }
  }
}
