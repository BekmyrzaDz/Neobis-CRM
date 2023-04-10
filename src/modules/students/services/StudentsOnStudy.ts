import axios from 'axios'
import {
  ICreateStudentonStudy,
  IDeleteStudentsOnStudyById,
  IEditStudentonStudy,
  IGetAllStudentsOnStudy,
  IGetStudentsOnStudyById,
  IStudentOnStudy,
} from '../types'
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

// Get student on study by ID
const getStudentOnStudyById = async ({
  token,
  id,
}: IGetStudentsOnStudyById): Promise<IStudentOnStudy> => {
  const response = await axios.get(API_URL + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

// Create student
const createStudentOnStudy = async ({
  token,
  first_name,
  last_name,
  surname,
  phone,
  came_from,
  department,
  on_request,
  is_archive,
  blacklist,
  laptop,
  payment_status,
  notes,
}: ICreateStudentonStudy): Promise<IStudentOnStudy> => {
  const response = await axios.post(
    API_URL,
    {
      first_name,
      last_name,
      surname,
      phone,
      came_from,
      department,
      on_request,
      is_archive,
      blacklist,
      laptop,
      payment_status,
      notes,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}

// Edit student on study by ID
const editStudentOnStudyById = async ({
  token,
  id,
  first_name,
  last_name,
  surname,
  phone,
  came_from,
  department,
  on_request,
  is_archive,
  blacklist,
  laptop,
  payment_status,
  notes,
}: IEditStudentonStudy): Promise<IStudentOnStudy> => {
  const response = await axios.put(
    API_URL + id + '/',
    {
      first_name,
      last_name,
      surname,
      phone,
      came_from,
      department,
      on_request,
      is_archive,
      blacklist,
      laptop,
      payment_status,
      notes,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}

// Delete student on study by ID
const deleteStudentOnStudyById = async ({
  token,
  id,
}: IDeleteStudentsOnStudyById): Promise<string> => {
  const response = await axios.delete(API_URL + id + '/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

const studentsOnStudyService = {
  getStudentsOnStudy,
  createStudentOnStudy,
  getStudentOnStudyById,
  editStudentOnStudyById,
  deleteStudentOnStudyById,
}

export default studentsOnStudyService
