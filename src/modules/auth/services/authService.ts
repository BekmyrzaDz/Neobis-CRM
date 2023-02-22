import axios from 'axios'
// import $api from '../../../http'
import { ILogin, IUser } from '../types'

axios.defaults.baseURL = 'http://mikieok.pythonanywhere.com'
const API_URL: string = '/api/'

// Login user
const login = async (userData: ILogin): Promise<IUser> => {
  const response = await axios.post(API_URL + 'login/personal/', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  login,
}

export default authService
