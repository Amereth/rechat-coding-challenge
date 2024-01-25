import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputBase,
  styled,
  useTheme,
  Select,
  MenuItem,
} from '@mui/material'
import { LayoutContainer } from '../../components/LayoutContainer'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { FormContainer } from '../../components/FormContainer'
import { EditIcon } from '../../assets/EditIcon'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTaskStorage } from '../../hooks/useTaskStorage'
import { Task, TaskStatus } from '../../types'
import { useTaskFormHelper } from '../../hooks/useTaskFormHelper'
import { Checkmark } from '../../assets/Checkmark'
import { getAllowedTaskStatusTransitions } from '../../utils/getAllowedStatusTransitions'
import { getTaskStatusLabel } from '../../utils/getTaskStatusLabel'
import { createTask } from '../../utils/createTask'
import { routes } from '../../router'
import { isTaskFormDirty } from './utils/isTaskFormDirty'

export const TaskUpdatePage = () => {
  const { spacing } = useTheme()
  const navigate = useNavigate()

  const { taskId } = useParams<{ taskId: string }>()

  const { tasks, updateTask: editTask } = useTaskStorage()
  const task = tasks.find(task => task.id === taskId) as Task

  const {
    formValues,
    onTitleChange,
    onDescriptionChange,
    onStatusChange,
    titleError,
    descriptionError,
    handleSubmit,
  } = useTaskFormHelper(task)

  const onSubmit = handleSubmit(values => {
    editTask(createTask(values, task))
    navigate(routes.home)
  })

  const statusOptions = getAllowedTaskStatusTransitions(task.status)

  return (
    <LayoutContainer>
      <StyledBreadcrumbs breadcrumb="Edit" />

      <FormContainer
        marginTop={spacing(2)}
        title="Edit Task"
        icon={<EditIcon />}
      >
        <form onSubmit={onSubmit}>
          <FormControl fullWidth error={!!titleError}>
            <InputBase
              placeholder="Title"
              value={formValues.title}
              onChange={event => onTitleChange(event.target.value)}
              sx={{ mt: spacing(3) }}
            />
            <FormHelperText error>{titleError}</FormHelperText>
          </FormControl>

          <FormControl fullWidth error={!!descriptionError}>
            <InputBase
              placeholder="Description"
              value={formValues.description}
              onChange={event => onDescriptionChange(event.target.value)}
              multiline
              rows={15}
              sx={{ mt: spacing(2) }}
            />
            <FormHelperText error>{descriptionError}</FormHelperText>
          </FormControl>

          <FormControl fullWidth sx={{ mt: spacing(2) }}>
            <Select
              input={<InputBase />}
              value={formValues.status}
              onChange={event =>
                onStatusChange(event.target.value as TaskStatus)
              }
            >
              <MenuItem value={task.status}>
                {getTaskStatusLabel(task.status)}
              </MenuItem>
              {statusOptions.map(status => (
                <MenuItem key={status} value={status}>
                  {getTaskStatusLabel(status)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <ButtonsContainer>
            <Button
              size="large"
              startIcon={<Checkmark />}
              type="submit"
              fullWidth
              disabled={!isTaskFormDirty(task, formValues)}
            >
              Save Changes
            </Button>
            <Button
              variant="outlined"
              fullWidth
              component={Link}
              to={routes.home}
            >
              Cancel
            </Button>
          </ButtonsContainer>
        </form>
      </FormContainer>
    </LayoutContainer>
  )
}

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `0 ${theme.spacing(2)}`,
  },
}))

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
}))
