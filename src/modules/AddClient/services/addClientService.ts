import axios from 'axios'
import getToken from '../../../helpers/getToken'
// import $api from '../../../http'
import { ICreateStudent } from '../types'

// axios.defaults.baseURL = 'https://crm-backend-production.up.railway.app'
axios.defaults.baseURL = 'http://64.226.89.72'
const API_URL: string = '/api/students/'

// Add client
const createStudent = async (studentData: ICreateStudent): Promise<ICreateStudent> => {
  console.log(studentData);
  
  const response = await axios.post(API_URL, studentData, {
    headers: getToken()
  })

  return response.data
}

const createService = {
  createStudent
}

export default createService