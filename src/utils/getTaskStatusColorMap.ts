import { Palette } from '@mui/material'
import { TaskStatus } from '../types'

/**
 * Get the color for a given status
 * @param status The status to get the color for
 * @returns The color for the given status
 */

export const getTaskStatusColorMap = (
  palette: Palette,
): Record<TaskStatus, string> => ({
  todo: palette.success.dark,
  'in-progress': palette.secondary.main,
  blocked: palette.error.light,
  'in-qa': palette.warning.main,
  done: palette.info.light,
  deployed: palette.success.dark,
})
