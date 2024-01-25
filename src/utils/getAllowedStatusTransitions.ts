import { TaskStatus } from '../types'

const allowedStatusTransitions: Record<TaskStatus, TaskStatus[]> = {
  todo: ['in-progress'],
  'in-progress': ['blocked', 'in-qa'],
  blocked: ['todo'],
  'in-qa': ['done', 'todo'],
  done: ['deployed'],
  deployed: [],
}

/**
 * Get the allowed status transitions for a given status
 * @param status The status to get the allowed transitions for
 * @returns The allowed status transitions for the given status
 */

export const getAllowedTaskStatusTransitions = (
  status: TaskStatus,
): TaskStatus[] => allowedStatusTransitions[status]
