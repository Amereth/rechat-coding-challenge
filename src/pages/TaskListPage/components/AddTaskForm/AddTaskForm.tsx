import {
  Box,
  Paper,
  Typography,
  styled,
  useTheme,
  InputBase,
  Button,
} from '@mui/material'
import { FileIcon } from '../../../../assets/FileIcon'
import { Add } from '@mui/icons-material'

export const AddTaskForm = () => {
  const { spacing } = useTheme()

  return (
    <Container>
      <Box display="flex" alignItems="center" gap={spacing(1)}>
        <FileIcon />
        <Typography variant="h2">Add a new Task</Typography>
      </Box>

      <Input placeholder="Title" fullWidth />

      <Input placeholder="Description" fullWidth multiline rows={6} />

      <AddButton size="large" startIcon={<Add />}>
        Add
      </AddButton>
    </Container>
  )
}

const Container = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  boxShadow: theme.boxShadows.container,
  borderRadius: theme.spacing(2),
}))

const Input = styled(InputBase)(({ theme }) => ({
  marginTop: theme.spacing(2),
}))

const AddButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(3),
  marginLeft: 'auto',
}))
