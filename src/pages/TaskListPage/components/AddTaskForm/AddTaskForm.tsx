import {
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
import { FormContainer } from '../../../../components/FormContainer'
import {
  validateDescription,
  validateTitle,
} from '../../../../utils/validation'

export const AddTaskForm = () => {
  const { spacing } = useTheme()
  const { addTask } = useTaskStorage()

  const [formState, setFormState] = useState<
    Pick<Task, 'title' | 'description'>
  >({ title: '', description: '' })

  const [isSubmitted, setSubmitted] = useState(false)

  const onTitleChange = (title: string) =>
    setFormState(prevState => ({ ...prevState, title }))

  const titleError = isSubmitted ? validateTitle(formState.title) : null

  const onDescriptionChange = (description: string) =>
    setFormState(prevState => ({ ...prevState, description }))

  const descriptionError = isSubmitted
    ? validateDescription(formState.description)
    : null

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)

    const isTaskValid =
      !validateTitle(formState.title) &&
      !validateDescription(formState.description)

    if (!isTaskValid) return

    addTask(createTask(formState))
    reset()
  }

  const reset = () => {
    setFormState({ title: '', description: '' })
    setSubmitted(false)
  }

  return (
    <FormContainer
      marginTop={spacing(2)}
      icon={<FileIcon />}
      title="Add a new Task"
    >
      <form onSubmit={onSubmit}>
        <FormControl fullWidth error={!!titleError}>
          <InputBase
            placeholder="Title"
            value={formState.title}
            onChange={event => onTitleChange(event.target.value)}
            sx={{ mt: spacing(3) }}
          />
          <FormHelperText error>{titleError}</FormHelperText>
        </FormControl>

        <FormControl fullWidth error={!!descriptionError}>
          <InputBase
            placeholder="Description"
            value={formState.description}
            onChange={event => onDescriptionChange(event.target.value)}
            multiline
            rows={6}
            sx={{ mt: spacing(2) }}
          />
          <FormHelperText error>{descriptionError}</FormHelperText>
        </FormControl>

        <AddButton size="large" startIcon={<Add />} type="submit">
          Add
        </AddButton>
      </form>
    </FormContainer>
  )
}

const AddButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(3),
  marginLeft: 'auto',
}))
