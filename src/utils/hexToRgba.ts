import { hexToRgb } from '@mui/material'

/**
 * Convert a hex color to an rgba color
 * @param hex The hex color to convert
 * @param alpha The alpha value to use
 * @returns The rgba color
 */

export const hexToRgba = (hex: string, alpha: number): string =>
  `${hexToRgb(hex).slice(0, -1)}, ${alpha})`
