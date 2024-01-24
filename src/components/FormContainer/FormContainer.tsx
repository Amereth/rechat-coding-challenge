import { Box, BoxProps, Typography, styled } from '@mui/material'
import { PropsWithChildren, ReactElement } from 'react'

type Props = PropsWithChildren<
  BoxProps & {
    icon: ReactElement
    title: string
  }
>

export const FormContainer = ({ icon, title, children, ...props }: Props) => {
  return (
    <Container {...props}>
      <Header>
        {icon}
        <Typography variant="h3">{title}</Typography>
      </Header>

      {children}
    </Container>
  )
}

const Container = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  boxShadow: theme.boxShadows.container,
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.up('sm')]: {
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    borderRadius: theme.spacing(2),
  },
}))

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))
