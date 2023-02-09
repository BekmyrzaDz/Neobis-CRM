import { ReactNode } from 'react'
import { Login, ForgotPassword, Verification, ResetPassword } from '..'

export type TLocation =
  | '/'
  | '/forgot-password'
  | '/verification'
  | '/reset-password'

export const renderAuthForm = (location: TLocation): ReactNode => {
  switch (location) {
    case '/':
      return <Login />
    case '/forgot-password':
      return <ForgotPassword />
    case '/verification':
      return <Verification />
    case '/reset-password':
      return <ResetPassword />
    default:
      return null
  }
}
