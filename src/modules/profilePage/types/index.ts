export interface IProfile {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  image: string
}

// Redux profile state
export interface IProfileState {
  profile: IProfile | null
  isLoading: boolean
  // isSuccess: boolean
  isError: boolean
}

// Formik profile form init state
export interface IProfileFormikState {
  first_name: string
  last_name: string
  email: string
  phone: string
}

// Update profile (data from inputs)
export interface IProfileFormData {
  first_name: string
  last_name: string
  phone: string
}

// Update profile (data with id, for request)
export interface IUpdateProfileData {
  id: number
  profileData: IProfileFormData
}

// Update Avatar (data with id, for request)
export interface IUpdateAvatarData {
  id: number
  formData: any
}
