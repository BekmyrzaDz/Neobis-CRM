// Login
export interface ILogin {
  email: string
  password: string
}

// Forgot Password
export interface IForgotPassword {
  email: string
}

// Verification Formik State
export interface IVerificationState {
  code: string
}

// Verification
export interface IVerification {
  code: string
  unique_id: string
}

// Reset Password Formik state
export interface IResetPasswordState {
  password: string
  repeat_password: string
}

// Reset Password
export interface IResetPassword {
  password: string
  repeat_password: string
  unique_id: string
}

// User (auth)
export interface IUser {
  first_name: string
  last_name: string
  email: string
  id: number
  expires_day: string
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
