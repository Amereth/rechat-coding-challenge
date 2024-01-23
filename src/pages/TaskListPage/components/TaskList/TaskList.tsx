import { Box, Stack, SxProps, Typography, styled } from '@mui/material'
import { EmptyState } from '../EmptyState'
import { useTaskStorage } from '../../../../hooks/useTaskStorage'
import { TaskCard } from '../TaskCard'
import { TrashIcon } from '../../../../assets/TrashIcon'
import { ConfirmDialog } from '../../../../components/ConfirmDialog'
import { useState } from 'react'
import { Task } from '../../../../types'

type Props = {
  sx: SxProps
}

export const TaskList = ({ sx }: Props) => {
  const { tasks, deleteTask } = useTaskStorage()

  const [selectedTaskId, setActiveTaskId] = useState<Task['id'] | null>(null)

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  return (
    <>
      <ConfirmDialog
        open={!!(selectedTaskId && deleteDialogOpen)}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={() => {
          if (selectedTaskId) deleteTask(selectedTaskId)
          setActiveTaskId(null)
        }}
        icon={<TrashIcon />}
        title="Delete Task?"
        description="You have made changes, are you sure about deleting “Task”?"
        confirmButtonText="Delete"
        confirmButtonColor="error"
        aria-label="Confirm task deletion"
      />

      <Box sx={sx}>
        <Header variant="h2">Tasks</Header>

        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <Stack>
            {tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onOpenHistory={() => null}
                onEdit={() => null}
                onDelete={() => {
                  setDeleteDialogOpen(true)
                  setActiveTaskId(task.id)
                }}
              />
            ))}
          </Stack>
        )}
      </Box>
    </>
  )
}

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `0 ${theme.spacing(2)}`,
  },
}))
