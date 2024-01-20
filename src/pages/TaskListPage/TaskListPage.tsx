import { Box } from '@mui/material'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { AddTaskForm } from './components/AddTaskForm'

export const TaskListPage = () => {
  return (
    <Box>
      <Breadcrumbs breadcrumb="Home" />
      <AddTaskForm />
    </Box>
  )
}
