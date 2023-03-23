import axios from "axios";

import {IStudent} from '../types'
import dndHeader from "./dndHeader";

// axios.defaults.baseURL = 'http://mikieok.pythonanywhere.com'
axios.defaults.baseURL = 'http://64.226.89.72'
const API_URL: string = '/api/students/'


// All students
const getAllStudents = async (): Promise<IStudent[]> => {
  const response = await axios.get(API_URL, {
    headers: dndHeader()
  })

  return response.data
}

const dndService = {
  getAllStudents,
}

export default dndService