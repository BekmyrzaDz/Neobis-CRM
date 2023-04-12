import axios from 'axios'
import { IGetAllGroupsOnStudy, IGroupOnStudy } from '../types'
// import $api from '../../../http'

axios.defaults.baseURL = 'http://64.226.89.72'
const API_URL: string = '/api/groups/'

// Get all groups on study
const getAllGroupsOnStudy = async ({
  token,
  departmentFilter,
}: IGetAllGroupsOnStudy): Promise<IGroupOnStudy[]> => {
  const response = await axios.get(API_URL + departmentFilter, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

// Get all for filters
const getGroupDepartmentFilters = async (
  token: string
): Promise<IGroupOnStudy[]> => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

const groupsOnStudyService = {
  getAllGroupsOnStudy,
  getGroupDepartmentFilters,
}

export default groupsOnStudyService
