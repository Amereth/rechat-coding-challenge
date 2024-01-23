import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, IconButton, Stack, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { DateLabel } from '../../../../components/DateLabel'
import { StatusChip } from '../../../../components/StatusChip'
import { TruncatedTypography } from '../../../../components/TruncatedTypography'
import { Task } from '../../../../types'
import { TaskCardMenu } from '../TaskCardMenu'

type Props = {
  task: Task
  onOpenHistory: () => void
  onEdit: () => void
  onDelete: () => void
}

export const TaskCard = ({ task, onOpenHistory, onEdit, onDelete }: Props) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null)

  return (
    <Container>
      <Header>
        <Stack>
          <Typography variant="h4">{task.title}</Typography>
          <DateLabel label="Created:" date={new Date(task.createdAt)} />
        </Stack>

        <Box display="flex" alignItems="center">
          <StatusChip size="small" status={task.status} />
          <MenuTriggerIconButton
            size="small"
            onClick={event => setMenuAnchor(event.currentTarget)}
          >
            <MoreVertIcon />
          </MenuTriggerIconButton>

          <TaskCardMenu
            anchorEl={menuAnchor}
            open={!!menuAnchor}
            onClose={() => setMenuAnchor(null)}
            onOpenHistory={onOpenHistory}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Box>
      </Header>

      <TruncatedTypography marginTop={({ spacing }) => spacing(1)} lines={3}>
        {task.description}
      </TruncatedTypography>
    </Container>
  )
}

const Container = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  boxShadow: theme.boxShadows.container,
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.up('sm')]: {
    borderRadius: theme.spacing(2),
  },
}))

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: theme.spacing(0.5),
}))

const MenuTriggerIconButton = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(3),
  height: theme.spacing(3),
  marginLeft: theme.spacing(0.5),
}))
