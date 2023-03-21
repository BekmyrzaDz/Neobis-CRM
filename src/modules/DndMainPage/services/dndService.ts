import axios from "axios";

import {IStudent} from '../types'
import dndHeader from "./dndHeader";

axios.defaults.baseURL = 'http://mikieok.pythonanywhere.com'
const API_URL: string = '/api/students/'
console.log(dndHeader());


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