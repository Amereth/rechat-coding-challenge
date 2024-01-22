import { Typography, TypographyProps } from '@mui/material'

/*
 * The TruncatedTypography component is a simple wrapper around the MUI Typography component.
 * which truncates the text and displays ellipsis if the text overflows
 */

type Props = TypographyProps & {
  lines: number
}

export const TruncatedTypography = ({ lines, sx, ...props }: Props) => (
  <Typography
    {...props}
    sx={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: lines,
      WebkitBoxOrient: 'vertical',
      ...sx,
    }}
  />
)
