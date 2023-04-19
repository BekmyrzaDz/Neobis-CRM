import { IPopularDepartment } from '../types'

export const updateDepartmentDataNames = (
  data: IPopularDepartment[]
): IPopularDepartment[] => {
  const updatedData: IPopularDepartment[] = []
  for (let i = 0; i < data.length; i++) {
    const departmentData = data[i]
    let updatedDepartmentData: IPopularDepartment
    switch (departmentData.name) {
      case 'ux-ui':
        updatedDepartmentData = {
          ...departmentData,
          name: 'UX/UI',
        }
        break
      case 'front-end':
        updatedDepartmentData = {
          ...departmentData,
          name: 'Frontend',
        }
        break
      case 'pm':
        updatedDepartmentData = {
          ...departmentData,
          name: 'PM',
        }
        break
      case 'back-end':
        updatedDepartmentData = {
          ...departmentData,
          name: 'Backend',
        }
        break
      case 'ios':
        updatedDepartmentData = {
          ...departmentData,
          name: 'iOS',
        }
        break
      case 'android':
        updatedDepartmentData = {
          ...departmentData,
          name: 'Android',
        }
        break
      case 'flutter':
        updatedDepartmentData = {
          ...departmentData,
          name: 'Flutter',
        }
        break
      case 'olimped_programming':
        updatedDepartmentData = {
          ...departmentData,
          name: 'PO',
        }
        break
      default:
        updatedDepartmentData = departmentData
        break
    }
    updatedData.push(updatedDepartmentData)
  }
  return updatedData
}
