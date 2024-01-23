import { CircularProgress, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<CircularProgress />} />
    </ThemeProvider>
  )
}
