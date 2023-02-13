import { createBrowserRouter } from 'react-router-dom'

import AuthPage from '../pages/auth/AuthPage'
import  Page404  from '../pages/page404/Page404'

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
  {
    path: '*',
    element: <Page404 />,
  },
])
