import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import { Task } from '../types'

type TaskStorage = {
  tasks: Task[]
  addTask: (task: Task) => void
  deleteTask: (taskId: Task['id']) => void
}

export const useTaskStorage = create<TaskStorage>()(
  persist(
    (set, get) => ({
      tasks: [],

      addTask(task: Task) {
        set({ tasks: [...get().tasks, task] })
      },

      deleteTask(taskId) {
        set({ tasks: get().tasks.filter(task => task.id !== taskId) })
      },
    }),
    { name: 'tasks' },
  ),
)
