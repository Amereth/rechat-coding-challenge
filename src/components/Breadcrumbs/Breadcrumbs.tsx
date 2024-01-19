import { ChevronRight } from '@mui/icons-material'
import { Box, Breadcrumbs as MuiBreadcrumbs, useTheme } from '@mui/material'

type Props = {
  breadcrumb: string
}

export const Breadcrumbs = ({ breadcrumb }: Props) => {
  const { palette } = useTheme()

  return (
    <MuiBreadcrumbs separator={<ChevronRight />}>
      <Box color={palette.primary.main}>Task Management</Box>
      <Box color={palette.grey[600]}>{breadcrumb}</Box>
    </MuiBreadcrumbs>
  )
}
