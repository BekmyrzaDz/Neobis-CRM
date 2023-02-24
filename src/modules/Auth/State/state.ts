import {
  IForgotPassword,
  ILogin,
  IResetPassword,
  IVerification,
} from '../types'

export let loginState: ILogin = {
  email: '',
  password: '',
}

export let forgotPasswordState: IForgotPassword = {
  email: '',
}

export let verificationState: IVerification = {
  code: '',
}

export let resetPassword: IResetPassword = {
  password: '',
  password2: '',
}
