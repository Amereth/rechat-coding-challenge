import { TaskListPage } from './pages/TaskListPage/TaskListPage'
import { createBrowserRouter } from 'react-router-dom'

export const routes = {
  root: '/',
}

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <TaskListPage />,
  },
])
