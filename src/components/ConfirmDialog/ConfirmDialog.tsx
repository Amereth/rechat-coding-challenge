import {
  Box,
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  DialogProps,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import { ReactNode } from 'react'

type Props = DialogProps & {
  onClose: () => void
  onConfirm: () => void
  icon?: ReactNode
  title: string
  description: string
  confirmButtonText: string
  confirmButtonColor?: ButtonProps['color']
}

export const ConfirmDialog = ({
  onClose,
  onConfirm,
  icon,
  title,
  description,
  confirmButtonText,
  confirmButtonColor,
  ...props
}: Props) => {
  const { spacing } = useTheme()

  return (
    <Dialog
      onClose={onClose}
      {...props}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Container>
        {icon}

        <Typography mt={spacing(5)} variant="h2" id="modal-title">
          {title}
        </Typography>

        <Typography mt={spacing(1.5)} variant="body1" id="modal-description">
          {description}
        </Typography>

        <ButtonsContainer>
          <Button onClick={onClose} fullWidth variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            fullWidth
            variant="contained"
            color={confirmButtonColor || 'primary'}
          >
            {confirmButtonText}
          </Button>
        </ButtonsContainer>
      </Container>
    </Dialog>
  )
}

const Container = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'stretch',
  textAlign: 'center',
  maxWidth: theme.spacing(60),
  padding: `${theme.spacing(5)} ${theme.spacing(8)}`,
}))

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(1.5),
  width: '100%',
  marginTop: theme.spacing(5),
}))
