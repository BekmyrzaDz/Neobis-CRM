import axios from 'axios'
import { IProfile, IUpdateAvatarData, IUpdateProfileData } from '../types'
// import $api from '../../../http'

axios.defaults.baseURL = 'http://64.226.89.72'
const API_URL: string = '/api/profiles/'

// Login user
const getProfileById = async (id: number): Promise<IProfile> => {
  const response = await axios.get(API_URL + id + '/')

  if (response.data) {
    localStorage.setItem('profile', JSON.stringify(response.data))
  }

  return response.data
}

// Update user data
const updateProfile = async ({
  id,
  profileData,
}: IUpdateProfileData): Promise<IProfile> => {
  const response = await axios.patch(`${API_URL}${id}/`, profileData)

  return response.data
}

// Update user avatar
const updateAvatar = async ({
  id,
  formData,
}: IUpdateAvatarData): Promise<IProfile> => {
  const response = await axios.put(`${API_URL}avatar/${id}/`, formData, {
    headers: {
      'Content-Type': `multipart/form-data`,
    },
  })

  return response.data
}

const profileService = {
  getProfileById,
  updateProfile,
  updateAvatar,
}

export default profileService
