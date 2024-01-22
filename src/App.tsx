import { CircularProgress, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TaskListPage } from './pages/TaskListPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskListPage />,
  },
])

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<CircularProgress />} />
    </ThemeProvider>
  )
}
