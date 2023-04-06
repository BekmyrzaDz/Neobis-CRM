import axios from 'axios'
import { IGetAllStudentsOnStudy, IStudentOnStudy } from '../types'
// import $api from '../../../http'

axios.defaults.baseURL = 'http://64.226.89.72'
const API_URL: string = '/api/students-on-study/'

// Get all students on study
const getStudentsOnStudy = async ({
  token,
  departmentFilter,
}: IGetAllStudentsOnStudy): Promise<IStudentOnStudy[]> => {
  const response = await axios.get(API_URL + departmentFilter, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

const studentsOnStudyService = {
  getStudentsOnStudy,
}

export default studentsOnStudyService
