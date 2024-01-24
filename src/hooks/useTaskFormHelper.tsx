import { useState, FormEvent } from 'react'
import { Task } from '../types'
import { validateTitle, validateDescription } from '../utils/validation'

type FormValues = Pick<Task, 'title' | 'description'>

export const useTaskFormHelper = () => {
  const [isSubmitted, setSubmitted] = useState(false)

  const [formValues, setFormValues] = useState<FormValues>({
    title: '',
    description: '',
  })

  const onTitleChange = (title: string) =>
    setFormValues(prevState => ({ ...prevState, title }))

  const titleError = isSubmitted ? validateTitle(formValues.title) : null

  const onDescriptionChange = (description: string) =>
    setFormValues(prevState => ({ ...prevState, description }))

  const descriptionError = isSubmitted
    ? validateDescription(formValues.description)
    : null

  const reset = () => {
    setFormValues({ title: '', description: '' })
    setSubmitted(false)
  }

  const handleSubmit =
    (onSubmit: (values: FormValues) => void) =>
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
    titleError,
    descriptionError,
    handleSubmit,
  }
}
