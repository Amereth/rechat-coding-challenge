/**
 * Validates the title of a post.
 * @param title - The title to be validated.
 * @returns A string error message if the title is invalid, otherwise null.
 */

export const validateTitle = (title: string): string | null => {
  if (title.length < 3) return 'Title must be at least 3 characters long'

  if (title.length > 100) return 'Title must be less than 100 characters long'

  return null
}

/**
 * Validates the description of a post.
 * @param description - The description to be validated.
 * @returns A string error message if the description is invalid, otherwise null.
 */

export const validateDescription = (description: string): string | null => {
  if (description.length < 10) {
    return 'Description must be at least 10 characters long'
  }

  if (description.length > 1000) {
    return 'Description must be less than 1000 characters long'
  }

  return null
}
