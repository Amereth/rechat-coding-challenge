export type Status =
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
  status: Status
  createdAt: Date
  updatedAt: string | null
}
