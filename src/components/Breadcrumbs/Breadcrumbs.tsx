import { ChevronRight } from '@mui/icons-material'
import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  styled,
  useTheme,
} from '@mui/material'

type Props = {
  breadcrumb: string
}

export const Breadcrumbs = ({ breadcrumb }: Props) => {
  const { palette } = useTheme()

  return (
    <MuiBreadcrumbs separator={<ChevronRight />}>
      <Breadcrumb color={palette.primary.main}>Task Management</Breadcrumb>
      <Breadcrumb color={palette.grey[600]}>{breadcrumb}</Breadcrumb>
    </MuiBreadcrumbs>
  )
}

const Breadcrumb = styled(Box)({ fontSize: '0.875rem' })
