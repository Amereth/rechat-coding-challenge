import { Box, styled, useTheme } from '@mui/material'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { AddTaskForm } from './components/AddTaskForm'
import { TaskList } from './components/TaskList'

export const TaskListPage = () => {
  const { spacing } = useTheme()

  return (
    <Box>
      <StyledBreadcrumbs breadcrumb="Home" />
      <AddTaskForm />
      <TaskList sx={{ mt: spacing(6) }} />
    </Box>
  )
}

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `0 ${theme.spacing(2)}`,
  },
}))
