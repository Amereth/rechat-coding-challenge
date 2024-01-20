import { Box, styled } from '@mui/material'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { AddTaskForm } from './components/AddTaskForm'

export const TaskListPage = () => {
  return (
    <Box>
      <StyledBreadcrumbs breadcrumb="Home" />
      <AddTaskForm />
    </Box>
  )
}

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `0 ${theme.spacing(2)}`,
  },
}))
