import { createBrowserRouter } from 'react-router-dom'

import AuthPage from '../pages/auth/AuthPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
  },
])
