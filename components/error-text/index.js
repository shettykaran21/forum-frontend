import { lighten, Typography } from '@mui/material'

const ErrorText = ({ msg }) => {
  return <Typography sx={{ color: lighten('#ff0000', 0.2) }}>{msg}</Typography>
}

export default ErrorText
