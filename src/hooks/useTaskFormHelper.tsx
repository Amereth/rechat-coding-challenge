import { useState, FormEvent } from 'react'
import { Task, TaskStatus } from '../types'
import { validateTitle, validateDescription } from '../utils/validation'

export type TaskFormValues = Pick<Task, 'title' | 'description' | 'status'>

export const useTaskFormHelper = (task?: Task) => {
  const [isSubmitted, setSubmitted] = useState(false)

  const [formValues, setFormValues] = useState<TaskFormValues>({
    title: task?.title ?? '',
    description: task?.description ?? '',
    status: task?.status ?? 'todo',
  })

  const onTitleChange = (title: string) =>
    setFormValues(prevState => ({ ...prevState, title }))

  const titleError = isSubmitted ? validateTitle(formValues.title) : null

  const onDescriptionChange = (description: string) =>
    setFormValues(prevState => ({ ...prevState, description }))

  const descriptionError = isSubmitted
    ? validateDescription(formValues.description)
    : null

  const onStatusChange = (status: TaskStatus) =>
    setFormValues(prevState => ({ ...prevState, status }))

  const reset = () => {
    setFormValues({
      title: task?.title ?? '',
      description: task?.description ?? '',
      status: task?.status ?? 'todo',
    })
    setSubmitted(false)
  }

  const handleSubmit =
    (onSubmit: (values: TaskFormValues) => void) =>
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setSubmitted(true)

      const isTaskValid =
        !validateTitle(formValues.title) &&
        !validateDescription(formValues.description)

      if (!isTaskValid) return

      onSubmit(formValues)
      reset()
    }

  return {
    formValues,
    onTitleChange,
    onDescriptionChange,
    onStatusChange,
    titleError,
    descriptionError,
    handleSubmit,
  }
}
