import { Box, Dialog, Divider, Stack, Typography, styled } from '@mui/material'
import { Task } from '../../../../types'
import { DateLabel } from '../../../../components/DateLabel'
import { getTaskStatusLabel } from '../../../../utils/getTaskStatusLabel'

type Props = {
  open: boolean
  onClose: () => void
  history?: Task['history']
}

export const TaskHistory = ({ open, onClose, history = [] }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      fullWidth
    >
      <Container>
        <Typography variant="h2" id="modal-title">
          Task History
        </Typography>

        <Stack
          id="modal-description"
          divider={<RecordDivider />}
          marginTop={({ spacing }) => spacing(4)}
        >
          {history.map(record => (
            <Stack>
              <Typography variant="h4">
                The task was marked as "{getTaskStatusLabel(record.status)}"
              </Typography>
              <DateLabel date={record.timestamp} />
            </Stack>
          ))}
        </Stack>
      </Container>
    </Dialog>
  )
}

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: theme.spacing(81),
  padding: theme.spacing(4),

  [theme.breakpoints.up('sm')]: {
    minHeight: theme.spacing(75),
  },
}))

const RecordDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
}))
