import { Palette } from '@mui/material'
import { TaskStatus } from '../types'

/**
 * Get the color for a given status
 * @param status The status to get the color for
 * @param palette MUI palette
 * @returns The color for the given status
 */

export const getTaskStatusColor = (
  status: TaskStatus,
  palette: Palette,
): string => {
  const colorMap = {
    todo: palette.success.dark,
    'in-progress': palette.secondary.main,
    blocked: palette.error.light,
    'in-qa': palette.warning.main,
    done: palette.info.light,
    deployed: palette.success.dark,
  }

  return colorMap[status]
}
