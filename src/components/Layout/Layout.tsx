import { styled, Box } from '@mui/material'
import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Background>
      <Container>{children}</Container>
    </Background>
  )
}

const Background = styled(Box)(({ theme }) => ({
  alignItems: 'stretch',
  height: '100vh',
  padding: '24px 0',
  backgroundColor: theme.palette.background.default,
}))

const Container = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  padding: '0 16px',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '648px',
    padding: 0,
  },
}))
