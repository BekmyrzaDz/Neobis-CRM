import axios from 'axios'
import { IPopularDepartment, IPopularSource, IRequestStatus } from '../types'
// import $api from '../../../http'

axios.defaults.baseURL = 'http://64.226.89.72'
const API_URL: string = '/api/analytics/'

// Get request statuses
const getRequestStatuses = async (token: string): Promise<IRequestStatus[]> => {
  const response = await axios.get(API_URL + 'request-statuses/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

// Get popular source
const getPopularSource = async (token: string): Promise<IPopularSource[]> => {
  const response = await axios.get(API_URL + 'popular-sources/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

// Get popular department
const getPopularDepartment = async (
  token: string
): Promise<IPopularDepartment[]> => {
  const response = await axios.get(API_URL + 'popular-departments/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

const analyticsService = {
  getRequestStatuses,
  getPopularSource,
  getPopularDepartment,
}

export default analyticsService
