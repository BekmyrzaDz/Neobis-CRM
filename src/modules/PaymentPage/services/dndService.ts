import axios from "axios";
import {ICreatePayment, IPayment, IStudent, IUpdateStudentData} from '../types'
import getToken from "../../../helpers/getToken";

axios.defaults.baseURL = 'http://64.226.89.72'
const API_URL: string = '/api/students/'
const API_URL_PAYMENT: string = '/api/payments/'

// All students
const getAllStudents = async (): Promise<IStudent[]> => {
  const response = await axios.get(API_URL, {
    headers: getToken()
  })

  return response.data
}

// Get student by id
const getStudentById = async (id: number): Promise<IStudent> => {  
  const response = await axios.get(`${API_URL}${id}/`, {
    headers: getToken()
  })

  return response.data
}

// Create payment
const createPayment = async (studentData: ICreatePayment): Promise<IPayment> => {
  console.log(studentData);
  
  const response = await axios.post(API_URL_PAYMENT, studentData, {
    headers: getToken()
  })

  return response.data
}

// Update student status
const updateStudent = async ({
  id,
  updateStudent,
}: IUpdateStudentData): Promise<IStudent> => {  
  const response = await axios.patch(`${API_URL}${id}/`, updateStudent, {
    headers: getToken()
  })

  return response.data
}

// Delete student
const deleteStudent = async (id: number): Promise<number> => {  
  const response = await axios.delete(`${API_URL}${id}/`, {
    headers: getToken()
  })  

  return response.status
}

const dndService = {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  createPayment,
}

export default dndService