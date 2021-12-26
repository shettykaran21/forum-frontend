import { Typography } from '@mui/material'

const PageTitle = ({ title }) => {
  return (
    <Typography component="h1" sx={{ fontSize: '1.5rem', fontWeight: '700' }}>
      {title}
    </Typography>
  )
}

export default PageTitle
