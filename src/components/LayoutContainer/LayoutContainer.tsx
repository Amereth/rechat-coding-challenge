import { styled, Box } from '@mui/material'

export const LayoutContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  padding: '24px 0',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '648px',
  },
}))
