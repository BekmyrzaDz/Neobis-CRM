import axios from 'axios'
// import $api from '../../../http'
import { IForgotPassword, ILogin, IUser, IVerification } from '../types'

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

// Reset Password
const resetPassword = async (email: IForgotPassword): Promise<string> => {
  const response = await axios.post(API_URL + 'password_reset/', email)

  return response.data
}

// Verification code to reset password
const verification = async (code: IVerification): Promise<string> => {
  const response = await axios.post(API_URL + 'password_reset_code/', code)

  return response.data
}

const authService = {
  login,
  resetPassword,
  verification,
}

export default authService
