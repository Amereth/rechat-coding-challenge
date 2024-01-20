import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import { Task } from '../types'

type TaskStorage = {
  tasks: Task[]
  addTask: (task: Task) => void
}

export const useTaskStorage = create<TaskStorage>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (task: Task) => {
        set({ tasks: [...get().tasks, task] })
      },
    }),
    { name: 'tasks' },
  ),
)
