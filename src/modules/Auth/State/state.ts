import {
  IForgotPassword,
  ILogin,
  IResetPasswordState,
  IVerificationState,
} from '../types'

export let loginState: ILogin = {
  email: '',
  password: '',
}

export let forgotPasswordState: IForgotPassword = {
  email: '',
}

export let verificationState: IVerificationState = {
  code: '',
}

export let resetPassword: IResetPasswordState = {
  password: '',
  repeat_password: '',
}
