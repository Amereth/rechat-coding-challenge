import { TaskFormValues } from '../../../hooks/useTaskFormHelper'
import { Task } from '../../../types'

/**
 * Checks if a task has been changed.
 * @param task The task to check.
 * @param formValues The form values to check against.
 * @returns True if the task has been changed, false otherwise.
 */

export const isTaskFormDirty = (
  task: Task,
  formValues: TaskFormValues,
): boolean => {
  if (task.title !== formValues.title) return true

  if (task.description !== formValues.description) return true

  if (task.status !== formValues.status) return true

  return false
}
