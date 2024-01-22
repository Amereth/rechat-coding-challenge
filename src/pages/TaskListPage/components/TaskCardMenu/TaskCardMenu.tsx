import { Menu, MenuItem, Typography, useTheme } from '@mui/material'
import { CalendarIcon } from '../../../../assets/CalendarIcon'
import { DeleteIcon } from '../../../../assets/DeleteIcon'
import { EditIcon } from '../../../../assets/EditIcon'

type Props = {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: () => void
  onOpenHistory: () => void
  onEdit: () => void
  onDelete: () => void
}

export const TaskCardMenu = ({
  anchorEl,
  open,
  onClose,
  onOpenHistory,
  onEdit,
  onDelete,
}: Props) => {
  const { spacing, palette } = useTheme()

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem
        sx={{ gap: spacing(0.5) }}
        onClick={() => {
          onOpenHistory()
          onClose()
        }}
      >
        <CalendarIcon />
        <Typography>Task History</Typography>
      </MenuItem>

      <MenuItem
        sx={{ gap: spacing(0.5) }}
        onClick={() => {
          onEdit()
          onClose()
        }}
      >
        <EditIcon />
        <Typography>Edit Task</Typography>
      </MenuItem>

      <MenuItem
        sx={{
          gap: spacing(0.5),
          color: palette.error.dark,
        }}
        onClick={() => {
          onDelete()
          onClose()
        }}
      >
        <DeleteIcon />
        <Typography>Delete Task</Typography>
      </MenuItem>
    </Menu>
  )
}
