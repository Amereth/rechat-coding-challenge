import { TaskStatus } from '../types'

const taskStatusLabelMap: Record<TaskStatus, string> = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  blocked: 'Blocked',
  'in-qa': 'In QA',
  done: 'Done',
  deployed: 'Deployed',
}

/**
 * Get the label for a given status
 * @param status The status to get the label for
 * @returns The label for the given status
 */

export const getTaskStatusLabel = (status: TaskStatus): string =>
  taskStatusLabelMap[status]
