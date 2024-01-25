import { Chip, ChipProps, useTheme } from '@mui/material'
import { TaskStatus } from '../../types'
import { hexToRgba } from '../../utils/hexToRgba'
import { getTaskStatusColor } from '../../utils/getTaskStatusColor'
import { getTaskStatusLabel } from '../../utils/getTaskStatusLabel'

/*
 * The StatusChip component is a simple wrapper around the MUI Chip component.
 * It accepts a status prop and uses it to determine label, color and applies styles
 */

// chip background color is same as text color but with 20% opacity
const opacity = 0.2

type Props = ChipProps & {
  status: TaskStatus
}

export const StatusChip = ({ status, sx, ...props }: Props) => {
  const { palette } = useTheme()

  const color = getTaskStatusColor(status, palette)

  return (
    <Chip
      label={getTaskStatusLabel(status)}
      sx={{
        color,
        backgroundColor: hexToRgba(color, opacity),
        ...sx,
      }}
      {...props}
    />
  )
}
