import { createBrowserRouter } from 'react-router-dom'

import AuthPage from '../pages/auth/AuthPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
    children: [
      { path: 'forgot-password', element: <AuthPage /> },
      { path: 'verification', element: <AuthPage /> },
      { path: 'reset-password', element: <AuthPage /> },
    ],
  },
])
