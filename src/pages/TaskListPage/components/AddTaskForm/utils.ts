import { Task } from '../../../../types'

export const createTask = ({
  title,
  description,
}: Pick<Task, 'title' | 'description'>): Task => ({
  title: title.trim(),
  description: description.trim(),
  id: Date.now().toString(),
  createdAt: new Date(),
  updatedAt: null,
  status: 'todo',
})
