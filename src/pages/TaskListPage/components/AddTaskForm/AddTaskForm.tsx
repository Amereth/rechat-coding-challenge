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

const isTitleValid = (title: string) => title.length >= 3 && title.length <= 100
const isDescriptionValid = (title: string) =>
  title.length >= 3 && title.length <= 100

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
      isTitleValid(formState.title) && isDescriptionValid(formState.description)

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
        <FormControl fullWidth>
          <InputBase
            inputProps={{
              minLength: 4,
            }}
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
              {!isTitleValid(formState.title) &&
                'Title must be between 3 and 100 characters long'}
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
              {!isDescriptionValid(formState.description) &&
                'Description must be at least 10 characters long'}
            </FormHelperText>
          )}
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
