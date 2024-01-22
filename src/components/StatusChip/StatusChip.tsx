import { Chip, ChipProps, useTheme } from '@mui/material'
import { TaskStatus } from '../../types'
import { hexToRgba } from '../../utils/hexToRgba'
import { getTaskStatusColorMap } from '../../utils/getTaskStatusColorMap'
import { getTaskStatusLabelMap } from '../../utils/getTaskStatusLabelMap'

/*
 * The StatusChip component is a simple wrapper around the MUI Chip component.
 * It accepts a status prop and uses it to determine label, color and applies styles
 */

type Props = ChipProps & {
  status: TaskStatus
}

export const StatusChip = ({ status, sx, ...props }: Props) => {
  const { palette } = useTheme()

  const colorMap = getTaskStatusColorMap(palette)
  const labelMap = getTaskStatusLabelMap()

  return (
    <Chip
      label={labelMap[status]}
      sx={{
        color: colorMap[status],
        backgroundColor: hexToRgba(colorMap[status], 0.2),
        ...sx,
      }}
      {...props}
    />
  )
}
