import axios from 'axios';
// import $api from '../../../http'
import { IForgotPassword, ILogin, IResetPassword, IUser, IVerification } from '../types';

axios.defaults.baseURL = 'http://64.226.89.72/';
const API_URL: string = '/api/auth/';

// Login user
const login = async (userData: ILogin): Promise<IUser> => {
  const response = await axios.post(API_URL + 'login/personal/', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Reset Password
const resetPassword = async (email: IForgotPassword): Promise<string> => {
  const response = await axios.post(API_URL + 'password_reset/', email);

  if (response.data) {
    localStorage.setItem('unique_id', JSON.stringify(response.data.unique_id));
  }

  return response.data;
};

// Verification code to reset password
const verification = async ({ code, unique_id }: IVerification): Promise<string> => {
  const response = await axios.post(API_URL + 'password_reset_code/', {
    code,
    unique_id,
  });

  return response.data;
};

// Verification code to reset password
const setNewPassword = async ({
  password,
  repeat_password,
  unique_id,
}: IResetPassword): Promise<string> => {
  const response = await axios.post(API_URL + 'password_reset_change/', {
    password,
    repeat_password,
    unique_id,
  });

  if (response.data) {
    localStorage.removeItem('unique_id');
  }

  return response.data;
};

const authService = {
  login,
  resetPassword,
  verification,
  setNewPassword,
};

export default authService;
