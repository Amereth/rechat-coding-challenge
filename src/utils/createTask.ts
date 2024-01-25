import { TaskFormValues } from '../hooks/useTaskFormHelper'
import { Task } from '../types'

/**
 * Creates a new task based on the provided form values and an optional existing task.
 * @param {TaskFormValues} formValues - The form values containing the title, description, and status of the task.
 * @param {Task} oldTask - An optional existing task to update. If not provided, a new task will be created.
 * @returns {Task} - The newly created or updated task.
 */

export const createTask = (
  { title, description, status }: TaskFormValues,
  oldTask?: Task,
): Task => {
  const timestamp = new Date()

  return {
    id: oldTask?.id ?? timestamp.getTime().toString(),
    title: title.trim(),
    description: description.trim(),
    status,
    createdAt: oldTask?.createdAt ?? timestamp,
    history: [
      ...(oldTask?.history ?? []),
      {
        status,
        timestamp,
      },
    ],
  }
}
