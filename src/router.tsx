import { TaskUpdatePage } from './pages/TaskUpdatePage/TaskUpdatePage'
import { TaskListPage } from './pages/TaskListPage/TaskListPage'
import { createBrowserRouter } from 'react-router-dom'

export const routes = {
  home: '/',
  taskUpdate: '/:taskId',
}

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <TaskListPage />,
  },
  {
    path: routes.taskUpdate,
    element: <TaskUpdatePage />,
  },
])
