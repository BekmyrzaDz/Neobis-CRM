// Login
export interface ILogin {
  email: string
  password: string
}

// Forgot Password
export interface IForgotPassword {
  email: string
}

// Verification
export interface IVerification {
  code: string
}

// Reset Password
export interface IResetPassword {
  password: string
  password2: string
}

// User (auth)
export interface IUser {
  first_name: string
  last_name: string
  email: string
  image: string | null
  user_id: number
  expires_day: string
  is_superuser: boolean
  user_type: string
  refresh: string
  access: string
}

// Redux auth state
export interface IAuthState {
  user: IUser | null
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}
