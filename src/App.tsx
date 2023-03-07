import { RouterProvider } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { router } from './routes/RoutesData'

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default App
