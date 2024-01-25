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
  history: {
    status: TaskStatus
    timestamp: Date
  }[]
  createdAt: Date
}
