import {
  Box,
  Typography,
  styled,
  useTheme,
  InputBase,
  Button,
  FormControl,
  FormHelperText,
} from '@mui/material'
import { FileIcon } from '../../../../assets/FileIcon'
import { Add } from '@mui/icons-material'
import { FormEvent, useState } from 'react'
import { useTaskStorage } from '../../../../hooks/useTaskStorage'
import { Task } from '../../../../types'
import { createTask } from './utils'

const isFieldValid = (title: string) => title.length > 3

export const AddTaskForm = () => {
  const { spacing } = useTheme()
  const { addTask } = useTaskStorage()

  const [formState, setFormState] = useState<
    Pick<Task, 'title' | 'description'>
  >({ title: '', description: '' })

  const [isSubmitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)

    const isTaskValid =
      isFieldValid(formState.title) && isFieldValid(formState.description)

    if (!isTaskValid) return

    addTask(createTask(formState))
    reset()
  }

  const reset = () => {
    setFormState({ title: '', description: '' })
    setSubmitted(false)
  }

  const isTitleValid = isFieldValid(formState.title)
  const isDescriptionValid = isFieldValid(formState.description)

  return (
    <Container onSubmit={onSubmit}>
      <Header>
        <FileIcon />
        <Typography variant="h2">Add a new Task</Typography>
      </Header>

      <FormControl fullWidth>
        <InputBase
          placeholder="Title"
          value={formState.title}
          onChange={event =>
            setFormState(prevState => ({
              ...prevState,
              title: event.target.value,
            }))
          }
          error={true}
          sx={{ mt: spacing(3) }}
        />
        {isSubmitted && (
          <FormHelperText error>
            {!isTitleValid && 'Title must be at least 3 characters long'}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl fullWidth>
        <InputBase
          placeholder="Description"
          value={formState.description}
          onChange={event =>
            setFormState(prevState => ({
              ...prevState,
              description: event.target.value,
            }))
          }
          multiline
          rows={6}
          sx={{ mt: spacing(2) }}
        />
        {isSubmitted && (
          <FormHelperText error>
            {!isDescriptionValid &&
              'Description must be at least 10 characters long'}
          </FormHelperText>
        )}
      </FormControl>

      <AddButton size="large" startIcon={<Add />} type="submit">
        Add
      </AddButton>
    </Container>
  )
}

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

const Container = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  boxShadow: theme.boxShadows.container,
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.up('sm')]: {
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    borderRadius: theme.spacing(2),
  },
}))

const AddButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(3),
  marginLeft: 'auto',
}))
