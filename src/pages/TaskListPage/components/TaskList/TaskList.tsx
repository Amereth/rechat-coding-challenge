import { Box, Stack, SxProps, Typography, styled } from '@mui/material'
import { EmptyState } from '../EmptyState'
import { useTaskStorage } from '../../../../hooks/useTaskStorage'
import { TaskCard } from '../TaskCard'
import { TrashIcon } from '../../../../assets/TrashIcon'
import { ConfirmDialog } from '../../../../components/ConfirmDialog'
import { useState } from 'react'
import { Task } from '../../../../types'
import { TaskHistory } from '../TaskHistory'
import { generatePath, useNavigate } from 'react-router-dom'
import { routes } from '../../../../router'

type Props = {
  sx: SxProps
}

export const TaskList = ({ sx }: Props) => {
  const navigate = useNavigate()
  const { tasks, deleteTask } = useTaskStorage()

  const [selectedTaskId, setActiveTaskId] = useState<Task['id'] | null>(null)

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false)

  return (
    <>
      <ConfirmDialog
        open={!!(selectedTaskId && deleteDialogOpen)}
        onClose={() => {
          setDeleteDialogOpen(false)
          setActiveTaskId(null)
        }}
        onConfirm={() => {
          if (selectedTaskId) deleteTask(selectedTaskId)
        }}
        icon={<TrashIcon />}
        title="Delete Task?"
        description="You have made changes, are you sure about deleting “Task”?"
        confirmButtonText="Delete"
        confirmButtonColor="error"
        aria-label="Confirm task deletion"
      />

      <TaskHistory
        open={!!(selectedTaskId && historyDialogOpen)}
        onClose={() => {
          setHistoryDialogOpen(false)
          setActiveTaskId(null)
        }}
        history={tasks.find(task => task.id === selectedTaskId)?.history}
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
                onOpenHistory={() => {
                  setHistoryDialogOpen(true)
                  setActiveTaskId(task.id)
                }}
                onEdit={() =>
                  navigate(generatePath(routes.taskUpdate, { taskId: task.id }))
                }
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
