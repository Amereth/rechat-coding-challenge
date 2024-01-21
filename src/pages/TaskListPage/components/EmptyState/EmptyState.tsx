import { Box, styled, Typography } from '@mui/material'
import { EmptyListIcon } from '../../../../assets/EmptyListIcon'

export const EmptyState = () => {
  return (
    <Container>
      <EmptyListIcon />
      <EmptyStateText variant="body2">
        You have nothing to do. <br /> Go get some sleep!
      </EmptyStateText>
    </Container>
  )
}

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  padding: `${theme.spacing(5)} ${theme.spacing(2)}`,
  boxShadow: theme.boxShadows.container,
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.up('sm')]: {
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    borderRadius: theme.spacing(2),
  },
}))

const EmptyStateText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.grey[600],
}))
