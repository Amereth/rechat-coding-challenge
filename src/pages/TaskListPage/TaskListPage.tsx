import { styled, useTheme } from '@mui/material'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { AddTaskForm } from './components/AddTaskForm'
import { TaskList } from './components/TaskList'
import { LayoutContainer } from '../../components/LayoutContainer'

export const TaskListPage = () => {
  const { spacing } = useTheme()

  return (
    <LayoutContainer>
      <StyledBreadcrumbs breadcrumb="Home" />
      <AddTaskForm />
      <TaskList sx={{ mt: spacing(6) }} />
    </LayoutContainer>
  )
}

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `0 ${theme.spacing(2)}`,
  },
}))
