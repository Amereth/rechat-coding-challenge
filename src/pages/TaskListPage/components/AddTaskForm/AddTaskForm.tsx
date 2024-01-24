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
import { useTaskStorage } from '../../../../hooks/useTaskStorage'
import { createTask } from './utils'
import { FormContainer } from '../../../../components/FormContainer'
import { useTaskFormHelper } from '../../../../hooks/useTaskFormHelper'

export const AddTaskForm = () => {
  const { spacing } = useTheme()
  const { addTask } = useTaskStorage()

  const {
    formValues,
    onTitleChange,
    onDescriptionChange,
    titleError,
    descriptionError,
    handleSubmit,
  } = useTaskFormHelper()

  const onSubmit = handleSubmit(values => {
    addTask(createTask(values))
  })

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
