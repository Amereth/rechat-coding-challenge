import { Typography, Box, styled } from '@mui/material'
import { format } from 'date-fns'
import { ClockIcon } from '../../assets/ClockIcon'
import { FULL_DATE_FORMAT } from '../../constants/dateFormats'

type Props = {
  label?: string
  date: Date
}

/*
 * The DateLabel component is a simple wrapper around the MUI Typography component.
 * which formats provided date and displays it with applied styles
 */

export const DateLabel = ({ label, date }: Props) => {
  return (
    <DateContainer>
      <ClockIcon />
      <Typography variant="subtitle1">
        {label} {format(date, FULL_DATE_FORMAT)}
      </Typography>
    </DateContainer>
  )
}

const DateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: theme.palette.grey[500],
}))
