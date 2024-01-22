import { Box, Stack, SxProps, Typography, styled } from '@mui/material'
import { EmptyState } from '../EmptyState'
import { useTaskStorage } from '../../../../hooks/useTaskStorage'
import { TaskCard } from '../TaskCard'

type Props = {
  sx: SxProps
}

export const TaskList = ({ sx }: Props) => {
  const { tasks } = useTaskStorage()

  return (
    <Box sx={sx}>
      <Header variant="h2">Tasks</Header>
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <Stack>
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Stack>
      )}
    </Box>
  )
}

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `0 ${theme.spacing(2)}`,
  },
}))
