import { IRequestStatus, ISingleDepartment } from '../types'

interface INameMap {
  [key: string]: string
}

export function updateReqStatusDepartmentNames(data: IRequestStatus) {
  const nameMap: INameMap = {
    'ux-ui': 'UX/UI',
    'front-end': 'Frontend',
    pm: 'PM',
    'back-end': 'Backend',
    ios: 'iOS',
    android: 'Android',
    flutter: 'Flutter',
    olimped_programming: 'PO',
  }
  const renamedDepartments = data.departments.map(
    (department: ISingleDepartment) => {
      const newName = nameMap[department.name]
      return {
        ...department,
        name: newName ? newName : department.name,
      }
    }
  )

  return {
    ...data,
    departments: renamedDepartments,
  }
}
