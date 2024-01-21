import { Box, SxProps, Typography, styled } from '@mui/material'
import { EmptyState } from '../EmptyState'

type Props = {
  sx: SxProps
}

export const TaskList = ({ sx }: Props) => {
  return (
    <Box sx={sx}>
      <Header variant="h2">Tasks</Header>
      <EmptyState />
    </Box>
  )
}

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `0 ${theme.spacing(2)}`,
  },
}))
