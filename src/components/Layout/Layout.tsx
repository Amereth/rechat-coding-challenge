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
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  padding: '24px 0',
  backgroundColor: theme.palette.background.default,
}))

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  margin: '0 auto',
  padding: 0,

  [theme.breakpoints.up('sm')]: {
    maxWidth: '648px',
  },
}))
