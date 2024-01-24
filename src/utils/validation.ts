export const validateTitle = (title: string): string | null => {
  if (title.length < 3) return 'Title must be at least 3 characters long'

  if (title.length > 100) return 'Title must be less than 100 characters long'

  return null
}

export const validateDescription = (description: string): string | null => {
  if (description.length < 10) {
    return 'Description must be at least 10 characters long'
  }

  if (description.length > 1000) {
    return 'Description must be less than 1000 characters long'
  }

  return null
}
