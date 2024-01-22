import { TaskStatus } from '../types'

/**
 * Get the label for a given status
 * @param status The status to get the label for
 * @returns The label for the given status
 */

export const getTaskStatusLabelMap = (): Record<TaskStatus, string> => ({
  todo: 'Todo',
  'in-progress': 'In Progress',
  blocked: 'Blocked',
  'in-qa': 'In QA',
  done: 'Done',
  deployed: 'Deployed',
})
