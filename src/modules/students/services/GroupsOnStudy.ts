import axios from 'axios'
import {
  ICreateGroupOnstudyREQ,
  ICreateGroupOnstudyRES,
  IEditGrouponStudy,
  IGetAllGroupsOnStudy,
  IGetGroupOnStudyById,
  IGroupOnStudy,
} from '../types'
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

// Get group on study by ID
const getGroupOnStudyById = async ({
  token,
  id,
}: IGetGroupOnStudyById): Promise<IGroupOnStudy> => {
  const response = await axios.get(API_URL + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

// Create group on study
const createGroupOnStudy = async ({
  token,
  name,
  mentor,
  department,
  students_max,
  schedule_type,
  classroom,
  is_archive,
  start_at_date,
  end_at_date,
  start_at_time,
  end_at_time,
}: ICreateGroupOnstudyREQ): Promise<ICreateGroupOnstudyRES> => {
  const response = await axios.post(
    API_URL,
    {
      name,
      mentor,
      department,
      students_max,
      schedule_type,
      classroom,
      is_archive,
      start_at_date,
      end_at_date,
      start_at_time,
      end_at_time,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}

// Edit group on study by ID
const editGroupOnStudyById = async ({
  id,
  token,
  name,
  mentor,
  department,
  students_max,
  schedule_type,
  classroom,
  is_archive,
  start_at_date,
  end_at_date,
  start_at_time,
  end_at_time,
}: IEditGrouponStudy): Promise<IGroupOnStudy> => {
  const response = await axios.put(
    API_URL + id + '/',
    {
      token,
      id,
      name,
      mentor,
      department,
      students_max,
      schedule_type,
      classroom,
      is_archive,
      start_at_date,
      end_at_date,
      start_at_time,
      end_at_time,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}

const groupsOnStudyService = {
  getAllGroupsOnStudy,
  getGroupDepartmentFilters,
  createGroupOnStudy,
  getGroupOnStudyById,
  editGroupOnStudyById,
}

export default groupsOnStudyService
