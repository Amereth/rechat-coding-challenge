export type TaskStatus =
  | 'todo'
  | 'in-progress'
  | 'blocked'
  | 'in-qa'
  | 'done'
  | 'deployed'

export type Task = {
  id: string
  title: string
  description: string
  status: TaskStatus
  createdAt: Date
  updatedAt: string | null
}
