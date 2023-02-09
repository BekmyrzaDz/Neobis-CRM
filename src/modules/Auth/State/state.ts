// Login
interface ILoginState {
  email: string
  password: string
}

export let loginState: ILoginState = {
  email: '',
  password: '',
}

// Forgot Password
interface IForgotPasswordState {
  email: string
}

export let forgotPasswordState: IForgotPasswordState = {
  email: '',
}

// Verification
interface IVerification {
  code: string
}

export let verificationState: IVerification = {
  code: '',
}

// Reset Password
interface IResetPassword {
  newPassword: string
  newPasswordConfirmation: string
}

export let resetPassword: IResetPassword = {
  newPassword: '',
  newPasswordConfirmation: '',
}
