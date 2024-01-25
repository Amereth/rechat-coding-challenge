import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import { Task } from '../types'

type TaskStorage = {
  tasks: Task[]
  addTask: (task: Task) => void
  deleteTask: (taskId: Task['id']) => void
  updateTask: (task: Task) => void
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

      updateTask(updatedTask) {
        set({
          tasks: get().tasks.map(task =>
            updatedTask.id === task.id ? updatedTask : task,
          ),
        })
      },
    }),

    { name: 'tasks' },
  ),
)
