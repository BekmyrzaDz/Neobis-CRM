import axios from "axios";

import {IStudent, IUpdateStudentData} from '../types'
import getToken from "../../../helpers/getToken";

// axios.defaults.baseURL = 'http://mikieok.pythonanywhere.com'
axios.defaults.baseURL = 'http://64.226.89.72'
const API_URL: string = '/api/students/'


// All students
const getAllStudents = async (): Promise<IStudent[]> => {
  const response = await axios.get(API_URL, {
    headers: getToken()
  })

  return response.data
}

// Update student status
const updateStudent = async ({
  id,
  updateStudentStatus,
}: IUpdateStudentData): Promise<IStudent> => {
  console.log('service', id, updateStudentStatus);
  
  const response = await axios.patch(`${API_URL}${id}/`, updateStudentStatus, {
    headers: getToken()
  })

  return response.data
}

const dndService = {
  getAllStudents,
  updateStudent
}

export default dndService